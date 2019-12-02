import React from 'react'
import axios from 'axios'

import useSignUpForm from '../customHooks/CustomHooks'
import TextInput from '../components/TextInput'

const Signup = () => {
  const submitSignup = () => {
    console.log('submitSignup inputs: ', inputs)
    return
    let user
    try {
      user = axios({
        url: 'https://api.mikefdesign.com/api/v1/users',
        method: 'POST',
        headers: {
          'authentication-key': '12345'
        },
        data: {
          first_name: 'Beau',
          last_name: 'Fritzsche',
          email: 'aragingsynth@gmail.com',
          password: 'password'
        }
      })
    }
    catch (err) {

    }
  }
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(submitSignup)

  return (
    <form onSubmit={handleSubmit}>
      {/*<div>*/}
      {/*  <label>First Name</label>*/}
      {/*  <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />*/}
      {/*  <label>Last Name</label>*/}
      {/*  <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <label>Email Address</label>*/}
      {/*  <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <label>Password</label>*/}
      {/*  <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1}/>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <label>Re-enter Password</label>*/}
      {/*  <input type="password" name="password2" onChange={handleInputChange} value={inputs.password2}/>*/}
      {/*</div>*/}
      <TextInput
        label="First Name"
        name="firstName"
        value={inputs.firstName}
        handleChange={handleInputChange}
      />
      <TextInput
        label="Last Name"
        name="lastName"
        value={inputs.lastName}
        handleChange={handleInputChange}
      />
      <TextInput
        label="Email"
        name="email"
        value={inputs.email} handleChange={handleInputChange}
      />
      <TextInput
        label="Password"
        name="password1"
        type="password"
        value={inputs.password1} handleChange={handleInputChange}
      />
      <TextInput
        label="Confirm Password"
        name="password2"
        type="password"
        value={inputs.password2} handleChange={handleInputChange}
      />
      <div>
        <button
          style={{

            background: '#20980b',
            color: '#fff',
            padding: '8px 10px',
            borderRadius: 5,
            fontSize: 13
          }}
          type="submit"
        >Sign Up
        </button>
      </div>
    </form>
  )
}
export default Signup
