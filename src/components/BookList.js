import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBooks } from '../services/api';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const data = await getBooks();
        setBooks(data);
    };

    return (
        <div className="container mt-4">
            <h2>📖 List of Books</h2>
            <ul className="list-group">
                {books.map((book) => (
                    <li key={book.id} className="list-group-item d-flex justify-content-between">
                        <Link to={`/book/${book.id}`} className="text-decoration-none">
                            {book.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
