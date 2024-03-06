// // BookForm.js
// import React from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
// import BookDetails from './BookDetails';
// import BookList from './BookList';

const BookForm = ({ initialValues, onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      author: Yup.string().required('Required'),
      
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
 
  });

  const history = useNavigate()
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
//  // Example of using BookForm in a parent component
// const ParentComponent = () => {
//   const initialValues = { title: '', author: '' };

//   const handleSubmit = (values) => {
//     // Handle form submission
//   };

//   return (
//     <BookForm initialValues={initialValues} onSubmit={handleSubmit} />
//   );
// };
const createBooks = async () =>{
  // creating object from input states
  const newStudents = {
    title:title,
    author:author,
    
}

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author}
        />
        {formik.touched.author && formik.errors.author ? (
          <div>{formik.errors.author}</div>
        ) : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};}

export default BookForm;
