// takes a book’s info from ShowBookList.js and makes a card for each book
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
  const book = props.book;

  return (
    <div className='card-container'>
      <img
        src={book.image ? `/api/books/${book._id}/image` : 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d'}
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-book/${book._id}`} className='text-decoration-none'>{book.title}</Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;