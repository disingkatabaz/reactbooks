import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../services/api';

const AddBook = () => {
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const handleAdd = async () => {
        await addBook(title);
        alert("Book added successfully!");
        navigate('/');
    };

    return (
        <div className="container mt-4">
            <h2>Add New Book</h2>
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Book title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleAdd}>Add</button>
            <button className="btn btn-secondary ms-2" onClick={() => navigate('/')}>Back</button>
        </div>
    );
};

export default AddBook;
