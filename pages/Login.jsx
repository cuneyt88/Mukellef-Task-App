"use client";
import React, {useState} from 'react'
import { AuthContext } from '@/api/auth/AuthContext';
import { useContext } from 'react';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'next/navigation'

const Login = () => {
    const authCtx = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    const handleForm=()=>{
        //Sabit bir username password kurgusu olduğu için eğer değerler doğru ise login olabilir gibi bir yapımız mevcut.
        if (username === "user" && password === "pass") {
            authCtx?.login();
            router.push('/cats')
          } else {
            alert("Hatalı kullanıcı adı veya şifre!");
          }
    }

  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className='login-container'>
            <div className='title-container'>
                <h1>Welcome Mukellef Cat</h1>
                <p>Please Login to Explore!</p>
            </div>
            <div className='form-div'>
                <form className='form-container'>
                    <input type="text" 
                        placeholder='Username'
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        />
                    
                    <input type="password" 
                        placeholder='Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                </form>
            </div>
            <div className='flex items-center justify-center'>
            <CustomButton className='custom-btn' title='Login' handleClick={handleForm}/>
            </div>
        </div>
    </div>
    
  )
}

export default Login