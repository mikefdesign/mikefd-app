import React from 'react'

const TextInput = ({label, name, inputValue, handleChange, type = 'text',  }) => {
  return (
    <>
      <label style={{ display: 'block' }}>{label}</label>
      <input
        type={type}
        name={name}
        onChange={handleChange}
        value={inputValue}
        required
      />
    </>
  )
}

export default TextInput
