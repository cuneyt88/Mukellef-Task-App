'use client';

import React, { createContext, useEffect, useState } from 'react';
import cookie from '@/utils/cookie'

export const AuthContext = createContext({
  token: 'pass',
  login:()=>{},
  logout: () => {},
  isLoggedIn:false,
  isLoading:true
});


const AuthProvider = ({ children }) => {
  //Burada state'i tutuyoruz
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    console.log(isLoading)
    // Burada cookie kontrolünü yapabilirsiniz.
    const storedToken = cookie.get('authToken');
    if (storedToken) {
      setIsLoggedIn(true);
    }
    setIsLoading(false)
  }, []);

  const login = () => {
    // Burada cookie'yi oluşturuyoruz.
    cookie.set('authToken','pass',100);
    setIsLoggedIn(true);
    console.log('After login isLoggedIn:', isLoggedIn);
  };

  const logout = () => {
    // Burada cookie'yi siliyoruz.
    cookie.delete('authToken');
    setIsLoggedIn(false);
  };

  const value = {
    //Değerleri tutuyoruz
    isLoggedIn,
    login,
    logout,
    isLoading
  };

  return (
    //Sarmallayarak alt komponentlere aktaracağız
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;