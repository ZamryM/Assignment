// useMockApi.ts
import { useState } from 'react';

export interface Book {
  id: number;
  title: string;
  author: string;
}

export const useMockApi = () => {
  const initialBooks: Book[] = JSON.parse(localStorage.getItem('books') || '[]');
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const fetchBooks = () => {
    return new Promise<Book[]>((resolve) => {
      setTimeout(() => {
        resolve(books);
      }, 500);
    });
  };

  const addBook = (newBook: Book) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const updatedBooks = [...books, newBook];
        setBooks(updatedBooks);
        localStorage.setItem('books', JSON.stringify(updatedBooks));
        resolve();
      }, 500);
    });
  };

  return {
    books,
    fetchBooks,
    addBook,
  };
};
