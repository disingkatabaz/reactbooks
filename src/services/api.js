import axios from 'axios';

// Base URL API Gateway
const API_URL = "https://f6lpxglmw9.execute-api.ap-southeast-1.amazonaws.com/production/books";

// Fungsi untuk mendapatkan semua buku
export const getBooks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Fungsi untuk mendapatkan detail buku berdasarkan ID
export const getBookById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

// Fungsi untuk menambahkan buku baru
export const addBook = async (title) => {
    const response = await axios.post(API_URL, { title });
    return response.data;
};

// Fungsi untuk mengupdate buku berdasarkan ID
export const updateBook = async (id, title) => {
    const response = await axios.put(`${API_URL}/${id}`, { title });
    return response.data;
};

// Fungsi untuk menghapus buku berdasarkan ID
export const deleteBook = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};