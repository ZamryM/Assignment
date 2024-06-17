
'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import BookList from '../components/BookList';
import About from '../components/About';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentPage, setCurrentPage] = useState('welcome');

  const renderContent = () => {
    switch (currentPage) {
      case 'welcome':
        return <Welcome />;
      case 'booklist':
        return <BookList setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      default:
        return <Welcome />;
    }
  };

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen flex-grow">
        <Header setCurrentPage={setCurrentPage} />
        <main className=" ">
          {renderContent()}
        </main>
        {children}
        <Footer />
      </body>
    </html>
  );
}
