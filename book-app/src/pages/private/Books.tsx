import React, { useState, useEffect } from 'react';
import BookCard from '../../components/bookcard/BookCard';
import { withRouter } from 'react-router-dom';
import MyCustomInput from '../../components/input/input';
import useAuthAxios from '../../hooks/useAuthAxios';

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  url: string;
}

function Books() {
  const [booksData, setBooksData] = useState<Book[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [searchText, setSearchText] = useState<string>('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [favBooks, setFavBooks] = useState([])
  const { makeAuthenticatedRequest } = useAuthAxios();


  useEffect(() => {
    getAllBooks()
    getMyFav()
  }, [])
  useEffect(() => {

    const timerId = setTimeout(() => {
      setDebouncedValue(inputValue);
      getSearchBooks(`/searchBooks?searchTerm=${inputValue}`)
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue]);

  const onChange = (event: React.SetStateAction<string>) => {
    setInputValue(event);
  };
  const getAllBooks = async () => {
    const data: [] = await makeAuthenticatedRequest("get", "/books");
    setBooksData(data);
  }
  const getSearchBooks = async (url: string) => {
    const data: any = await makeAuthenticatedRequest("get", url);
    setBooksData(data)
  }
  const updateFav = async (id:number) => {
    await makeAuthenticatedRequest('patch', `/favourite/${id}`);
    setFavBooks([...favBooks, id as never])

  }
  const removeFav = async (id:number) => {
    await makeAuthenticatedRequest('delete', `/favourite/${id}`);
    setFavBooks((books) => books.filter(el => el !=id))
  }
  const getMyFav = async () => {
    const data:any = await makeAuthenticatedRequest('get', `/me/`);
    setFavBooks(data)
  }

  return (
    <div>
      <div className='flex items-center justify-between w-full'>
        <h1>Books</h1>
        <div className='w-1/3'>
          <MyCustomInput placeholder='Search' value={searchText} onChange={(e) => onChange(e)} />
        </div>
      </div>

      <div className='flex flex-wrap'>
        {booksData.map((book) => (
          <div key={book.id}>
            <BookCard removefav={removeFav} favBooks={favBooks} updateFav={updateFav} id={book.id} title={book.title} author={book.author} description={book.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default withRouter(Books);
