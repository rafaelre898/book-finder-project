import { useState } from 'react';
import axios, { AxiosResponse, Method } from 'axios';
import { useAuthContext } from '../context/authContext';

interface AuthResponse {
  access_token: string;
}

interface AuthHook {
  authToken: string;
  login: (username: string, password: string) => Promise<AuthResponse>;
  logout: () => void;
  makeAuthenticatedRequest: <T>(method: Method, url: string, data?: any) => Promise<T>;
}

const useAuthAxios = (): AuthHook => {
  const [authToken, setAuthToken] = useState('');
  const {login:contextLogin} =  useAuthContext()
  axios.defaults.baseURL = "http://localhost:3000";

  const login = async (username: string, password: string): Promise<any> => {
    try {
      const response = await axios.post<AuthResponse>('/login', { username, password });
      if(response.data.access_token){
        const newAuthToken = response.data.access_token;
        axios.defaults.headers['Authorization'] = `Bearer ${newAuthToken}`;
        setAuthToken(newAuthToken);
        contextLogin()
      }
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      return error
    }
  };

  const logout = (): void => {
    delete axios.defaults.headers.common['Authorization'];
    setAuthToken('');
  };

  const makeAuthenticatedRequest = async <T>(method: Method, url: string, data?: any): Promise<T> => {
    try {
      const response = await axios.request<T>({ method, url, data });
      return response.data;
    } catch (error) {
      console.error('Authenticated request failed:', error);
      throw error;
    }
  };

  return {
    authToken,
    login,
    logout,
    makeAuthenticatedRequest,
  };
};

export default useAuthAxios;
