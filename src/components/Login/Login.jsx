import React from 'react'
import LoginForm from "./LoginForm";


export const Login = (props) => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={props.onSubmit}/>
    </>
  )
}

export default Login