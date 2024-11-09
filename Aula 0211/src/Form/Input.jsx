import React from 'react'

const Input = ({id, label, ...props}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  )
}

export default Input
