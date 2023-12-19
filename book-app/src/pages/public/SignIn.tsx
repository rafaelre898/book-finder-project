import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import MyCustomInput from '../../components/input/input';
import useAuthAxios from '../../hooks/useAuthAxios';
import  { AxiosResponse } from 'axios';

function SignIn(props: RouteComponentProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState('')
  const {login} = useAuthAxios();

  const onLogin = async () => {
      const data:any = await login(userName, password)
      if(data.access_token){
        props.history.push('/books');
      }
      else{
        setError(data.response.data.message)
      }
    
  };

  return (
    <div className='w-full h-full flex flex-row bg-white'>
      {loading && <Loader />}
      <div className='min-h-screen md:w-[45%] lg:w-[30%] m-auto flex justify-center items-center drop-shadow-lg '>
        <div className='p-10 w-[100%] border-[1px] -mt-10  rounded-2xl flex flex-col items-center space-y-3 bg-white'>
          <div className='flex flex-col text-h3 items-center'>BOOKS APP</div>
          <div className='py-4'>
            <h1 className='text-h6 text-black'>Sign In</h1>
          </div>
          <div className='w-full'>Email</div>
          <MyCustomInput
            placeholder='User Name'
            value={userName}
            onChange={(event) => setUserName(event)}
          />
          <div className='w-full'>Password</div>
          <MyCustomInput
            placeholder='Password'
            value={password}
            isSecure={true}
            onChange={(event) => setPassword(event)}
          />
          {error}
          <div className='w-full flex flex-row justify-end cursor-pointer text-primary hover:text-primaryDark'>
            Forgot Password?
          </div>

          <div
            onClick={onLogin}
            className='w-full cursor-pointer flex items-center justify-center bg-primary rounded-lg p-3 text-white font-bold transition duration-200 hover:bg-primaryDark '
          >
            Login
          </div>

          <p className='text-center text-black text-xs'>
            &copy;2023 Book App. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SignIn);
