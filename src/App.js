import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import Layout from './components/common/Layout';
import AppRouter from './components/AppRouter';
import { AuthContext } from './components/context';
function App() {
  const [isAuth, setIsAuth] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
  })
  return (
    <AuthContext.Provider value={{
      isAuth, setIsAuth
    }}>
      <BrowserRouter>
        <Header/>
        <Layout>
          <AppRouter/>
        </Layout>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;