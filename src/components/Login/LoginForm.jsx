import React from "react";
import {Field, reduxForm} from "redux-form";
import Input from "../common/Input";
import {required} from "../../utils/validators";


let LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='Email' component={Input} name='email' validate={[required]}/>
      </div>
      <div>
        <Field placeholder='Password' component={Input} name='password' type='password'/>
      </div>
      <div>
        <label >
          <Field type='checkbox' component={Input} name='rememberMe'/>Remember me
        </label>
      </div>
      <div>{props.error && <span>{props.error}</span>}</div>
      <div>
        <button type='submit'>Login</button>
      </div>
    </form>
  )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

export default LoginForm