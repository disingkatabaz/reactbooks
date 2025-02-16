import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById, updateBook, deleteBook } from '../services/api';

const BookDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetchBook();
    }, []);

    const fetchBook = async () => {
        const data = await getBookById(id);
        setTitle(data.title);
    };

    const handleUpdate = async () => {
        await updateBook(id, title);
        alert("Book updated successfully!");
    };

    const handleDelete = async () => {
        await deleteBook(id);
        alert("Book deleted successfully!");
        navigate('/');
    };

    return (
        <div className="container mt-4">
            <h2>Edit Book</h2>
            <input
                type="text"
                className="form-control mb-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button className="btn btn-warning me-2" onClick={handleUpdate}>Update</button>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            <button className="btn btn-secondary ms-2" onClick={() => navigate('/')}>Back</button>
        </div>
    );
};

export default BookDetail;
