

import {CgMenu } from 'react-icons/cg'
import {VscClose } from 'react-icons/vsc'
import React, { useState } from 'react'
import PasswordCheck from './PasswordCheck'

const  Navbar = () => {
  
  const [isMenu , setIsMenu ] = useState(false)

  return (
   <>
    <div className=' bg-blue-500 text-white pt-12 pb-10  sticky top-0 '> 
     <div className=' flex  justify-around md:text-lg lg:text-2xl '>
       <h2 className='text-2xl sm:text-xl lg:text-3xl text-red-300'>  Güvenli <span className='text-red-300'>Parola</span> </h2>
       <div className='sm:hidden text-4xl cursor-pointer'>
        {!isMenu ?  <CgMenu onClick={ () => setIsMenu(true) } /> : <VscClose onClick={ () => setIsMenu(false) } /> }
       </div>

      
       <nav className=' hidden sm:block'>
          <ul className='flex sm:gap-3 md:gap-7 text-stone-200'>
            <li> <a href="#home">Ana Sayfa</a> </li>
            <li> <a href="#parolagücü">Parola Gücü</a> </li>
            <li> <a href="#parolaolustur">Güvenli Parola Oluştur</a> </li>
            <li> <a href="#hakkimda">Hakkımda</a> </li>
          </ul>
       
       </nav>
       </div>
       </div>
       { isMenu && <div className='sticky top-28' > <hr className='w-full h-1 bg-white' /> <nav className='bg-blue-500 transition p-5 sm:hidden' >
          <ul className='flex flex-col text-xl gap-2 text-stone-300' >
            <li> <a href="#home" onClick={() => setIsMenu(prev => !prev)}>Ana Sayfa</a> </li>
            <li> <a href="#parolagücü" onClick={() => setIsMenu(prev => !prev)}>Parola Gücü</a> </li>
            <li> <a href="#parolaolustur" onClick={() => setIsMenu(prev => !prev)}>Güvenli Parola Oluştur</a> </li>
            <li> <a href="#hakkimda" onClick={() => setIsMenu(prev => !prev)}>Hakkımda</a> </li>
          </ul>
       </nav>
       <hr className='w-full h-1 bg-white' />
       </div>
 }
       <PasswordCheck />
       </>
  )
}

export default  Navbar