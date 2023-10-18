import React from 'react'
import { useCallback } from 'react'

const Buttons = ({ generatePassword, code, password}) => {
const copyPassword = useCallback(() => {
  code.current?.select()
  window.navigator.clipboard.writeText(password)
}, [password])

  return (
  <>
    <button className='bg-white' onClick={copyPassword}>Copy</button>
    <button className='bg-white' onClick={generatePassword}>Generate</button>
  </>
  )
}

export default Buttons