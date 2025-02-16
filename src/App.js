import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import AddBook from './components/AddBook';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/book/:id" element={<BookDetail />} />
                <Route path="/add" element={<AddBook />} />
            </Routes>
        </Router>
    );
};

export default App;
