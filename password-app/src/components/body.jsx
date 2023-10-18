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

  // useEffect(() => {
  //   generatePassword()
  // }, [length, numberState, charState, generatePassword])

  
  return (
    <div className='w-2/5 h-96 border-2 border-cyan-400 rounded-sm justify-center text-center items-center inset-x-50 absolute'>
      <h1 className='text-yellow-300 text-3xl font-bold'>Password Generator</h1>
      <Inputs generatePassword={ generatePassword} code={code} numberState= {numberState} length ={length} charState={charState} password= {password} setNumberState= {setNumberState} setcharState={setcharState} setLength = {setLength}/>
     
    </div>
  )
}

export default Body