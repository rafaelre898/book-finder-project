import React from 'react';

interface BookCardProps {
  title: string;
  author: string;
  description: string;
  show?: boolean;
  updateFav?: (id: number) => void,
  id: number;
  favBooks?: any[],
  removefav?:(id: number) => void
}

const BookCard: React.FC<BookCardProps> = ({ id, title, author, description, show = true, updateFav, favBooks, removefav }) => {
  return (
    <div className='border-[1px] border-[#ededed] cursor-pointer rounded-lg w-[250px] p-4 m-2'>
      <img
        src='https://images-platform.99static.com//4qnYfo1GWn_6byPwUP3YYxhUFxs=/0x0:2040x2040/fit-in/500x500/99designs-contests-attachments/93/93094/attachment_93094569'
        className='mb-2'
      />
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Description: {description}</p>


      {typeof id}
      {show && (
        <>{
          favBooks && favBooks.includes(id as never) ? <div onClick={() => removefav && removefav(id)} className='w-[90%] py-1 flex items-center justify-center px-2 mt-3 bg-primary mr-auto ml-auto mb-4 rounded-lg text-white  flex-row cursor-pointer '>
            Remove from fav
          </div> : <div onClick={() => updateFav && updateFav(id)} className='w-[90%] py-1 flex items-center justify-center px-2 mt-3 bg-primary mr-auto ml-auto mb-4 rounded-lg text-white  flex-row cursor-pointer '>
            Add to fav
          </div>}
        </>
      )}
    </div>
  );
};

export default BookCard;
