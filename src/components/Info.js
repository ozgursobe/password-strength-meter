

import React from 'react'

const Info = () => {
  return (
    <div className='w-80 sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1300px] mx-auto ' id='parolagücü'>

    <div className='pt-36' >
        <h2 className='text-2xl text-center'>
            Parola Gücü Nasıl Belirlenir
        </h2>
        <div className='mt-20'>
        <div className='flex flex-col sm:flex-row gap-12 md:gap-24'>
              <img className=' w-52 sm:w-52 lg:w-64 h-56 sm:h-64 md:h-56 lg:h-60 xl:h-48 rounded-md' src="../img/length.jpeg" alt="" />
              <div >
                <h2 className='text-xl lg:text-2xl text-blue-800'>1- Uzunluk :</h2>
                <div className='mt-4 sm:text-lg lg:text-xl leading-8'>
                  Uzun şifreler kullanmak, şifre gücü için kritik öneme sahiptir. 8 karakterlik bir şifrenin kırılması birkaç dakikadan birkaç saate kadar sürerken, 16 karakterlik bir şifrenin kırılması bir bilgisayar korsanının milyarlarca yılını alabilir.
                </div>
              </div>
            </div>
         

            <div className='mt-16 flex flex-col sm:flex-row gap-12 md:gap-24'>
              <img className='w-52 sm:w-52 lg:w-64 h-56 sm:h-72 md:h-56 lg:h-60 xl:h-48 rounded-md' src="../img/complexity.jpeg" alt="" />
              <div>
                <h2 className='text-xl lg:text-2xl text-blue-800'>2- Karmaşıklık :</h2>
                <div className='mt-4 sm:text-lg lg:text-xl leading-8'>
                  Şifrelerin karmaşıklığı, şifrelerin içerdikleri karakter türlerinin ve uzunluklarının kombinasyonuna dayanır. Güçlü bir şifre, büyük ve küçük harfleri, rakamları ve özel karakterleri içeren uzun bir dizedir. Bu karmaşıklık, saldırganların şifreyi tahmin etmesini veya kaba kuvvet saldırıları ile şifreyi çözmeye çalışmasını zorlaştırır.
                </div>
              </div>
            </div>
        
          
        </div>
    </div>

    </div>
   
  )
}

export default Info