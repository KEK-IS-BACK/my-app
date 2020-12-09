import React from 'react'
import styles from "./Captcha.module.css";
import {Field} from "redux-form";
import updateCaptcha from '../../../assets/images/update_captcha.png'
import Input from "../Input/Input";
import {required} from "../../../utils/validators";

const Captcha = props => {
  return (
    <div className={styles.captcha}>
      <div className={styles.captcha__body}>
        <img className={styles.captcha__img} src={props.captchaUrl} alt='captcha'/>
        <div className={styles.captcha__btnUpdate} onClick={() => {props.setCaptcha()}}>
          <img src={updateCaptcha} alt=""/>
        </div>
      </div>
      <div>
        <Field component={Input}
               name='captcha'
               placeholder='Введите символы с картинки'
               validate={[required]}/>
      </div>
    </div>
  )
}

export default Captcha