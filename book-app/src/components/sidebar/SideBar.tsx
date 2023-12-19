import React from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';

const isNotActiveStyle =
  'flex items-center text-[15px] text-white  w-[80%] m-auto py-3 px-2 rounded-md  transition-all duration-200 ease-in-out capitalize cursor-pointer underline-none';
const isActiveStyle =
  'flex items-center text-[15px] text-white  font-bold transition-all duration-200 ease-in-out capitalize cursor-pointer underline-none';

const generalList = [
  {
    id: 1,
    text: 'Books',
    url: '/books',
  },
  {
    id: 2,
    text: 'Favorite',
    url: '/favorite',
  },
];

interface SideBarProps {
  closeToggle: any; // Adjust the type according to your implementation
}

const SideBar: React.FC<SideBarProps> = ({ closeToggle }) => {
  const history = useHistory();

  return (
    <div className='flex flex-col justify-between bg-primary h-screen overflow-y-scroll min-w-[220px] hide-scrollbar shadow-md'>
      <div className='flex flex-col'>
        <Link
          to='/'
          className='flex px-5 gap-2 my-6 pt-1 w-190 items-center cursor-pointer'
          onClick={() => {
            if (closeToggle) closeToggle(false);
          }}
        ></Link>
        <div className='flex flex-col gap-7'>
          {generalList.map((item) => (
            <NavLink
              to={item.url}
              key={item.id}
              className={isNotActiveStyle}
              activeClassName={isActiveStyle}
              onClick={() => {
                if (closeToggle) closeToggle(false);
              }}
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      </div>
      <div
        onClick={() => {
          localStorage.removeItem('isLoggedIn');
          history.push('/signin');
        }}
        className='w-[90%] py-1 px-3 bg-white mr-auto ml-auto mb-4 rounded-lg text-white flex flex-row cursor-pointer hover:border-2 hover:border-[#212121] drop-shadow-md'
      >
        <h1 className='ml-2 text-[18px] text-[#212121] '> Logout</h1>
      </div>
    </div>
  );
};

export default SideBar;
