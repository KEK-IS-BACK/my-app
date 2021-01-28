import React from 'react'
import styles from "./Captcha.module.css";
import {Field} from "redux-form";
import updateCaptcha from '../../../assets/images/update_captcha.png'
import Input from "../Input/Input";
import {required} from "../../../utils/validators";

type PropsType = {
  captchaUrl: string,
  setCaptcha: () => void
}

const Captcha : React.FC<PropsType> = props => {
  const {captchaUrl, setCaptcha} = props

  return (
    <div className={styles.captcha}>
      <div className={styles.captcha__body}>
        <img className={styles.captcha__img} src={captchaUrl} alt='captcha'/>
        <div className={styles.captcha__btnUpdate} onClick={() => {setCaptcha()}}>
          <img src={updateCaptcha} alt="Каптча"/>
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