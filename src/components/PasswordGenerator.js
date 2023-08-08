

import React, { useState } from 'react'
import zxcvbn from 'zxcvbn';
import { FaCopy} from 'react-icons/fa';

const PasswordGenerator = () => {

    const [passwordLength , setPasswordLength ] = useState(16)

    const lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const [isLower ,setIsLower] = useState(false)

    const upperAlph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const [isUpper ,setIsUpper] = useState(false)

    const numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    const [isNumber ,setIsNumber] = useState(false)

    const symbolList = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/" ]

    const [isSymbol ,setIsSymbol] = useState(false)

    const [passwordList , setPasswordList ] = useState([])

    const [newPassword , setNewPassword ] = useState("")

    const [passwordStrength , setPasswordStrength ] = useState(0)

    const [isCopied , setIsCopied ] = useState(false)

    const updatePasswordList = (list , isState) => {
        if(!isState) {
          setPasswordList(prev => prev.concat(list))
        }
        else {
          setPasswordList(prev => prev.filter(element => !list.includes(element)) )
        }

       
    }

    const createPassword = (e) => {
      e.preventDefault()
      var createdWord = ""
      if(passwordList.length > 0) { 
        for(var i=0 ; i<passwordLength ; i++ ) {
          createdWord += passwordList[Math.floor(Math.random() * passwordList.length)]
       }
       setNewPassword(createdWord)
       const result = zxcvbn(createdWord)
       setPasswordStrength(result.score)
      }
     
    }

    const copyPassword = () => {
      if(newPassword) {
        navigator.clipboard.writeText(newPassword)
        setIsCopied(true)
      }
      setTimeout(()=> {
        setIsCopied(false)
      }, 1000)

    }

   



  return (
    <div className=' bg-slate-300 mt-20   '>

    <div className='lg:w-[1000px] xl:w-[1270px] mx-auto min-h-[1000px] pt-20 ' id='parolaolustur' >
       <div className='pt-10'>
        <h2 className='text-center text-2xl'>
            Güvenli Parola Oluştur
        </h2>
        <div className='mt-16'>
          <div className=' mt-10 mx-auto w-[300px] sm:w-[550px] md:w-[600px] lg:w-[800px] flex items-center justify-between px-4 bg-slate-700 h-20 text-white text-base sm:text-xl md:text-2xl  rounded-lg '>
            <p className='break-all'>
              {newPassword ? newPassword : "aWdx4.g!2?cs" }
            </p>
        
            <div className='relative mr-4 text-blue-500' onClick={copyPassword}>
            {isCopied && <div className='absolute -right-7 -top-9 bg-white text-black text-sm w-20 h-8 flex justify-center items-center rounded-lg'>Kopyalandı</div> }
              <FaCopy className='cursor-pointer text-xl' onClick={copyPassword} />
            </div>
          </div>
          <div className='mt-10 mx-auto w-[300px] sm:w-[550px] md:w-[600px] lg:w-[800px]  bg-slate-700 h-[580px] text-white text-2xl  rounded-lg '>
             <div className='pl-4 sm:pl-10 pt-10'>
                <h3 className='text-2xl'>Karakter Uzunluğu : <span className='text-blue-400'>{passwordLength}</span>  </h3>
                <div className='mt-8 flex gap-3 sm:gap-6'>
                    <button className='w-6 h-6 bg-white flex items-center justify-center text-black rounded-full' onClick={() => setPasswordLength(prev => prev - 1)}>-</button>
                    <input className='cursor-pointer bg-slate-500 w-48  ' type="range" min= "1" max = "50" value= { passwordLength } onChange={e => setPasswordLength(e.target.value)} />
                    <button className='w-6 h-6 bg-white flex items-center justify-center text-black rounded-full' onClick={() => setPasswordLength(prev => prev + 1)}>+</button>
                </div>
             </div>
             <div className='mt-10 ml-4 sm:ml-10'>
                <form className='text-xl flex flex-col gap-5 '>
                    <div>
                      <input className='w-4 h-4' type="checkbox" checked = {isUpper} id="uppercase" onChange={() => {
                          updatePasswordList(upperAlph , isUpper)
                          
                          setIsUpper(prev => !prev)
                      } } />
                      <label className='ml-5' htmlFor="uppercase">Büyük Harf [A-Z] </label>
                    </div>
                    <div>
                      <input className='w-4 h-4' type="checkbox" checked = {isLower} id="lowercase" onChange={() => {
                         updatePasswordList(lowerAlph , isLower)
                         setIsLower(prev => !prev)
                      }   } />
                      <label className='ml-5' htmlFor="lowercase">Küçük Harf [a-z] </label>
                    </div>
                    <div>
                      <input className='w-4 h-4' type="checkbox" checked = {isNumber} id="number" onChange={() => {
                         updatePasswordList(numberList , isNumber)

                         setIsNumber(prev => !prev)
                      }  } />
                      <label className='ml-5' htmlFor="number">Rakam [0-9] </label>
                    </div>
                    <div>
                      <input className='w-4 h-4' type="checkbox" checked = {isSymbol} id="symbol" onChange={() => {
                         updatePasswordList(symbolList , isSymbol)
                         setIsSymbol(prev => !prev)
                      }  } />
                      <label className='ml-5' htmlFor="symbol">Sembol [!@#$%*-=+;:?] </label>
                    </div>
                
                </form>
             </div>

             <div className='mt-12 flex justify-center '>
              <div className=' w-[280px] sm:w-[450px] h-20 bg-black flex items-center justify-between rounded-lg text-base sm:text-xl text-slate-400'>
                <div className='ml-4'>
                  Parola Gücü 
                </div>
                <div className='flex items-center mr-3 gap-2 sm:gap-3'>
                   { passwordStrength === 0 &&  <> <p className='text-slate-300'></p>
                   <div className='w-4 h-8 border-2 '></div>
                   <div className='w-4 h-8 border-2 '></div>
                   <div className='w-4 h-8 border-2 '></div>
                   <div className='w-4 h-8 border-2 '></div> </>  }
                   { passwordStrength === 1 &&  <> <p className='text-slate-300'>Zayıf</p>
                   <div className='w-4 h-8 border-2 bg-red-600 '></div>
                   <div className='w-4 h-8 border-2 '></div>
                   <div className='w-4 h-8 border-2 '></div>
                   <div className='w-4 h-8 border-2 '></div> </>  }
                  
                   { passwordStrength === 2 &&  <> <p className='text-slate-300'>Orta</p>
                   <div className='w-4 h-8 border-2 bg-yellow-400 '></div>
                   <div className='w-4 h-8 border-2 bg-yellow-400 '></div>
                   <div className='w-4 h-8 border-2 '></div>
                   <div className='w-4 h-8 border-2 '></div> </>  }
                  
                   { passwordStrength === 3 &&  <> <p className='text-slate-300'>İyi</p>
                   <div className='w-4 h-8 border-2 bg-green-400 '></div>
                   <div className='w-4 h-8 border-2  bg-green-400'></div>
                   <div className='w-4 h-8 border-2  bg-green-400'></div>
                   <div className='w-4 h-8 border-2 '></div> </>  }
                  
                   { passwordStrength === 4 &&  <> <p className='text-slate-300'>Güçlü</p>
                   <div className='w-4 h-8 border-2  bg-green-700'></div>
                   <div className='w-4 h-8 border-2  bg-green-700'></div>
                   <div className='w-4 h-8 border-2  bg-green-700'></div>
                   <div className='w-4 h-8 border-2  bg-green-700'></div> </>  }
                  
                  
                </div>

              </div>
             </div>

             <div className='mt-8 flex justify-center'>
              <form onSubmit={createPassword} >
                <button className='w-[280px] sm:w-[450px] h-12 border-2 bg-blue-500 rounded-lg' type="submit"  >Şifre Oluştur</button>
              </form>
             </div>

          </div>
        </div>
       
       </div>
    </div>
    </div>
  )
}

export default PasswordGenerator