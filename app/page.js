'use client';

import React, { useContext } from 'react';
import { AuthContext } from '@/api/auth/AuthContext';
import Login from '@/pages/Login';


export default function Home() {
  //useContext ile alan değerleri iletiyoruz.
  const authCtx = useContext(AuthContext);

  console.log("isLoggedIn:", authCtx);

  return (
    //True değeri dönüyorsa (kullanıcı hatasız login ise) anasayfaya geç, değil ise login sayfasına yönlendir.
      <main className='overflow-hidden'>
        <Login/>
      </main>
  )
}
