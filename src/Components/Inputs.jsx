import React from 'react'
import { Form } from 'react-router-dom'

const Inputs = ({text, name, value, onChanged, minLength}) => {
  return (
   <input 
   type={text}
   name={name}
   value={value}
   onChange={onChanged}
   minLength={minLength}
   />
  )
}

export default Inputs