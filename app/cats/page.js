"use client";
import 'animate.css/animate.min.css';
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import CustomButton from '../../components/CustomButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { AuthContext } from '@/api/auth/AuthContext';

const Cat = () => {
    const authCtx = useContext(AuthContext);
    const [catUrl, setCatUrl] = useState('');
    const [animationClass, setAnimationClass] = useState('');
    const API_KEY = process.env.API_KEY

    const animations = [
      'animate__animated animate__fadeIn',
      'animate__animated animate__slideInUp',
      'animate__animated animate__bounce',
      'animate__animated animate__rubberBand'
    ];

    const handleChange = async () => {
        try {
          const response = await fetch(`/api/images/search?api_key=${API_KEY}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          if (data && data.length > 0) {
            setCatUrl(data[0].url);

            const randomIndex = Math.floor(Math.random() * animations.length);
            setAnimationClass(animations[randomIndex]);
            console.log(animationClass)
          }
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
    };

    useEffect(() => {
        handleChange();
      }, []);

    if(authCtx.isLoading){
      return <h1>Sayfanız yükleniyor</h1>
    }

    if(!authCtx.isLoggedIn){
      return <h1>Sayfaya giriş yetkiniz yoktur!</h1>
    }

  return (
    <>
        <Navbar/>
            <div className='cat'>
                <div className='flex-1 pt-36 padding-x'>
                    <h1 className='cat__title'>
                        Change cat photos
                    </h1>

                    <p className='cat__subtitle'>quickly and easily!</p>

                    <CustomButton className='custom-btn' title='Change Cat' handleClick={handleChange}/>
                </div>
                <div className='cat__image-container'>
                    <div className={`cat__image ${animationClass}`}>
                    {catUrl && (
                        <Image src={catUrl} alt='cat' fill className='object-contain' sizes="(max-width: 500px) 100vw, 500px"/>
                    )}  
                    </div>
                </div>
            </div>
          <Footer/>
    </>
  )
}

export default Cat