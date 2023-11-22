import React from 'react'
import { Form } from 'react-router-dom'

const Inputs = ({text, name, value, onChanged}) => {
  return (
   <input 
   type={text}
   name={name}
   value={value}
   onChange={onChanged}
   
   />
  )
}

export default Inputs