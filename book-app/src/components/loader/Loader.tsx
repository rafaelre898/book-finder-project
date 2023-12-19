import React from 'react';

const Loader = () => {
  return (
    <>
      <div className='w-screen h-screen fixed z-1 bg-[#e8fcee] opacity-30'></div>
      <div className='w-screen h-screen flex items-center justify-center fixed z-1 bg-transparent'>
        <div className='lds-ripple'>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
