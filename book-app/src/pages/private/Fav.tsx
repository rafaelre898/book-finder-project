import React, { useState, useEffect } from 'react';
import BookCard from '../../components/bookcard/BookCard';
import { withRouter } from 'react-router-dom';
import useAuthAxios from '../../hooks/useAuthAxios';
import { Book } from './Books';

function Favorite() {
  const { makeAuthenticatedRequest } = useAuthAxios();

  const [booksData, setBooksData] = useState<Book[]>([]);

  useEffect(()=>{
    getUserFav()
  },[])

  const getUserFav = async() => {
    const data:any = await makeAuthenticatedRequest('get', '/favourites');
    setBooksData(data.favBooks)
  }

  return (
    <div>
      <h1>Favorite</h1>

      <div className='flex flex-wrap'>
        {booksData.map((book) => (
          <div key={book.id}>
            <BookCard id={book.id} show={false} title={book.title} author={book.author} description={book.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default withRouter(Favorite);
