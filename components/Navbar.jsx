import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AuthContext } from '@/api/auth/AuthContext'
import { useContext, } from 'react';
import CustomButton from './CustomButton';
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const router=useRouter()

  const handleLogout=()=>{
    authCtx?.logout()
    router.push("/")
  }

  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href="/" className='flex justify-center items-center'>
                <Image 
                src="/logo-no-background.svg"
                alt='Mukellef Cat Logo'
                width={118}
                height={18}
                className='objec-contain'
                />
            </Link>

            <CustomButton className='custom-btn' title='Logout' handleClick={handleLogout}/>
        </nav>
    </header>
  )
}

export default Navbar