import zxcvbn from 'zxcvbn';
import { useEffect, useState } from 'react';

import React from 'react'

const PasswordCheck = () => {

  const [userPassword , setUserPassword ] = useState("")
  const [ passwordDetails , setPasswordDetails ] = useState({
    score : 0,
    color : "white",
    crack_time : ""
  })

  const setCrackTime = (crack) => {

    if(crack === 0.0001) {
      setPasswordDetails(prev => {
        return {
          ...prev,
          crack_time : ""
        } 
      })
    }

    else if(crack !== 0.0001 && crack < 1) {
      setPasswordDetails(prev => {
        return {
          ...prev,
          crack_time : "1 saniyeden daha kısa"
        } 
      })
    }
  
    else if(Math.floor(crack) >= 1 && Math.floor(crack) < 60 ) {
      setPasswordDetails(prev => {  
        return {
          ...prev,
          crack_time : `${Math.floor(crack)} saniye` 
        } 
      })
    }
    else if(Math.floor(crack) >= 60 && Math.floor(crack) < 3600 ) {
      setPasswordDetails(prev => {  
        return {
          ...prev,
          crack_time : Math.floor(crack/60) + " dakika"
        } 
      })
    }

    else if(Math.floor(crack) >= 3600 && Math.floor(crack) < 86400 ) {
   
      
   setPasswordDetails(prev => {  
    return {
      ...prev,
      crack_time : Math.floor(crack/3600)  + " saat"
    } 
  })
    }

    else if(Math.floor(crack) >= 86400 && Math.floor(crack) < 2592000 ) {
      
      setPasswordDetails(prev => {  
        return {
          ...prev,
          crack_time : Math.floor((crack/86400)) + " gün"
        } 
      })
    
    }

    else if(Math.floor(crack) >= 2592000 && Math.floor(crack) < 31104000 ) {
      
      setPasswordDetails(prev => {  
        return {
          ...prev,
          crack_time : Math.floor((crack/2592000)) + " ay"
        } 
      })
    }

    else if(Math.floor(crack) >= 31104000 && Math.floor(crack) < 3110400000 ) {
      
      setPasswordDetails(prev => {  
        return {
          ...prev,
          crack_time : Math.floor((crack/31104000)) + " yıl"
        } 
      })
    }

    else if(Math.floor(crack) >=  3110400000 ) {
      
      setPasswordDetails(prev => {  
        return {
          ...prev,
          crack_time : "Yüzyıldan daha uzun"
        } 
      })
    }

   

  }





 useEffect(() => {
  const result = zxcvbn(userPassword)
  
  

  setCrackTime(result.crack_times_seconds.offline_slow_hashing_1e4_per_second) 
   
 

  

  if(result.score === 0) {  
    setPasswordDetails(prev => {
      return {
        ...prev,
        score : result.score,
        color : "bg-white"
      }
    
    })
  }

  else if(result.score === 1) {
    setPasswordDetails(prev => {
      return {
        ...prev,
        score : result.score,
        width : "w-1/4",
        color : "bg-red-600"
      }
    
    })
   
  }
  else if(result.score === 2) {
    setPasswordDetails(prev => { 
     return {
        ...prev,
        score : result.score,
        width : "w-2/4",
        color : "bg-yellow-400"
     }  
    })
  }
  else if(result.score === 3) {
    setPasswordDetails(prev => {
      return {
        ...prev,
        score : result.score,
        width : "w-3/4",
        color : "bg-green-400"
      }

    })
  }
  else if(result.score === 4) {
    setPasswordDetails(prev => {
      return {
        ...prev,
        score : result.score,
        width : "w-4/4",
        color : "bg-green-700"
      }
      
    })
  }

  
 }, [userPassword] )
  return (
    <div className='pt-32 h-[600px] bg-blue-500' id='home'>
      
    <div className='w-80 sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1300px] h-[400px] sm:h-[350px] md:h-[400px] bg-white mx-auto text-black rounded-md sm:p-4 '>
      <h2 className='text-2xl pt-6 mb-10 text-center'>Parola Gücünü Test Et</h2>
    <form className='flex flex-col gap-5 justify-center mx-5'>
      <label className='text-xl' htmlFor="password">Şifrenizi Giriniz : </label>
      <input className=' h-10 border-2 border-slate-300 rounded sm:text-xl md:text-2xl' type="text" id="password" onChange={e => setUserPassword(e.target.value)} />
    </form>
    <div className='flex flex-col sm:flex-row justify-between px-6 sm:px-10 text-base sm:text-lg md:text-xl lg:text-2xl'>
      <div className='mt-5 flex flex-col justify-center gap-5'>
        <div>Şifre Gücünüz : </div>
        <div className= "sm:w-44 md:w-52 lg:w-80 h-4 rounded bg-slate-300" >
          <div className= { passwordDetails.score > 0 ? `${passwordDetails.width} h-4 rounded ${passwordDetails.color} ` : "rounded" }  ></div>
        </div>
      </div>
     <div>
     <p className='mt-5 '>Şifrenizin Tahmini Çalınma Süresi :  </p>  
     <div className='pt-3 sm:text-xl lg:text-2xl text-blue-600'> {passwordDetails.crack_time }</div>
     </div>
     
    </div>
   
      
    </div>
    </div>
  )
}

export default PasswordCheck