
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-600 h-96 text-white text-base sm:text-xl'>
      <div className='w-[300px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1300px] mx-auto ' id='hakkimda'>
        <div className=' sm:p-12 md:p-20 flex flex-col sm:flex-row justify-around gap-6 sm:gap-32 md:gap-12'>
          <ul className='mt-4 sm:mt-0 flex sm:flex-col  gap-2 sm:gap-5 text-blue-300 text-sm sm:text-2xl'>
            <li> <a href="#home">Ana Sayfa</a> </li>
            <li> <a href="#parolagücü">Parola Gücü</a> </li>
            <li> <a href="#parolaolustur">Güvenli Parola Oluştur</a> </li>
            <li> <a href="#hakkimda">Hakkımda</a> </li>
          </ul>

          <div className='p-5 sm:p-0 text-lg sm:text-2xl'>
            <h3 className=' underline text-stone-200'>İletişim</h3>
            <div className='mt-5 text-white'>
              <a href="mailto:sobe.ozgur@gmail.com" target="blank"> sobe.ozgur@gmail.com</a>
              <div className='mt-5 flex items-center gap-4'>
                <p>LinkedIn : </p>
                <a className='text-blue-400' href="https://www.linkedin.com/in/%C3%B6zg%C3%BCr-s%C3%B6be-5a8a27270/"><i className='text-3xl'><BsLinkedin /></i></a>
              </div>
              <div className='mt-5 flex items-center gap-4'>
                <p>Github : </p>
                <a className='text-blue-400 ' href="https://github.com/ozgursobe"><i className='text-3xl'><BsGithub /></i> </a>
              </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Footer