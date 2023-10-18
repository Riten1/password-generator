import React from 'react'
import Inputs from './inputs'
import Buttons from './buttons'
import { useEffect,useCallback,useState,useRef } from "react";


const Body = () => {
  const [password, setPassword] = useState('')
  const [numberState, setNumberState] = useState(false);
  const [charState, setcharState] = useState(false);
  const [length, setLength] = useState(6);
  let code = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = '';
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz'
    let numbers = '1234567890'
    let char = '!@#$%^&*()_+~`*-?><'

    if (numberState)  alpha += numbers;

    if (charState) alpha += char;

    for ( let i = 0; i < length; i++ ){
      let alphaIndex = Math.random() * alpha.length +1;

    
     
        pass += alpha.charAt(alphaIndex);
      
      
    }

    setPassword(pass)

  },[length, numberState, charState])

  useEffect(() => {
    generatePassword()
  }, [length, numberState, charState, generatePassword])

  
  return (
    <div className='w-96 h-96 border-2 border-blue-600 rounded-sm'>
      <h1 className='text-white font-'>Password Generator</h1>
      <Inputs code={code} numberState= {numberState} length ={length} charState={charState} password= {password} setNumberState= {setNumberState} setcharState={setcharState} setLength = {setLength}/>
      <Buttons password={password} code={code} generatePassword={ generatePassword}/>
    </div>
  )
}

export default Body