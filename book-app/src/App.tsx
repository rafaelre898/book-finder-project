import React from 'react';
import './App.css';
import AppRouter from './routes/routes';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
