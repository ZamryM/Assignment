import React, { useState, useEffect } from 'react';
import { useMockApi, Book } from '../MockApi/useMockApi';

interface BookListProps {
  setCurrentPage: (page: string) => void;
}

const BookList: React.FC<BookListProps> = ({ setCurrentPage }) => {
  const { books, fetchBooks, addBook } = useMockApi();
  const [showModal, setShowModal] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const [formError, setFormError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [sortBy, setSortBy] = useState<'title' | 'author'>('title'); // Default sort by title
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'); // Default sort order ascending

  useEffect(() => {
    fetchBooks();
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setNewBookTitle('');
    setNewBookAuthor('');
    setFormError('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newBookTitle.trim() || !newBookAuthor.trim()) {
      setFormError('Please enter a book title and author.');
      return;
    }

    const newBook: Book = {
      id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
      title: newBookTitle,
      author: newBookAuthor,
    };

    try {
      addBook(newBook);
      setSuccessMessage('Successfully added new book!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      closeModal();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as 'title' | 'author');
  };

  const handleSortOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value as 'asc' | 'desc');
  };

  const sortBooks = (a: Book, b: Book) => {
    const fieldA = sortBy === 'title' ? a.title.toLowerCase() : a.author.toLowerCase();
    const fieldB = sortBy === 'title' ? b.title.toLowerCase() : b.author.toLowerCase();

    if (sortOrder === 'asc') {
      return fieldA.localeCompare(fieldB);
    } else {
      return fieldB.localeCompare(fieldA);
    }
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedBooks = [...filteredBooks].sort(sortBooks);

  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-center bg-gradient-to-r from-blue-950 via-black to-black">

  
      <div className="relative z-10 max-w-6xl w-full p-8 bg-white rounded-lg shadow-lg">

        <div className="flex justify-between items-center mb-4">
          <div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={openModal}
            >
              Add Book
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center mb-2 sm:mb-0">
              <label htmlFor="sort-by" className="mr-2">
                Sort by:
              </label>
              <select
                id="sort-by"
                value={sortBy}
                onChange={handleSortByChange}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              >
                <option value="title">Title</option>
                <option value="author">Author</option>
              </select>
            </div>
            <div className="flex items-center">
              <label htmlFor="sort-order" className="mr-2">
                Sort order:
              </label>
              <select
                id="sort-order"
                value={sortOrder}
                onChange={handleSortOrderChange}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
        </div>

        {successMessage && (
          <div className="mb-4 p-4 text-green-800 bg-green-200 rounded-lg">
            {successMessage}
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
              <h2 className="text-xl font-semibold mb-4">Add New Book</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Book Title"
                    value={newBookTitle}
                    onChange={(e) => setNewBookTitle(e.target.value)}
                    className="p-3 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                    Author
                  </label>
                  <input
                    type="text"
                    id="author"
                    placeholder="Author Name"
                    value={newBookAuthor}
                    onChange={(e) => setNewBookAuthor(e.target.value)}
                    className="p-3 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                {formError && (
                  <p className="text-red-500 text-sm mb-4">{formError}</p>
                )}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Displaying sorted books */}
        <div className="max-h-96 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {sortedBooks.map((book) => (
            <div key={book.id} className="bg-gray-100 p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110">
              <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
              <p className="text-md text-gray-600 mb-2">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
