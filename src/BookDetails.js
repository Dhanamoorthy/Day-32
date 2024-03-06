// BookDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookForm from './BookForm';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/books/${id}`).then((response) => {
      setBook(response.data);
    });
  }, [id]);

  const handleUpdate = (values) => {
    axios.put(`http://localhost:3000/api/books/${id}`, values).then((response) => {
      setBook(response.data);
    });
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/api/books/${id}`).then(() => {
      // Redirect or handle deleted book
    });
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>

      <BookForm initialValues={book} onSubmit={handleUpdate} />

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BookDetails;
