import {Field, reduxForm} from "redux-form";
import styles from "./ProfileInfoForm.module.css";

const ProfileInfoForm = ({handleSubmit, contacts}) => {

  return (

    <form onSubmit={handleSubmit} className={styles.profileInfoForm}>
      <div className={styles.profileInfo__field}>
        <label>Полное имя:
          <Field component='input'
                 placeholder='Иванов Иван Иванович'
                 name='fullName'
                 className={styles.profileInfo__input}
          />
        </label>
      </div>
      <div className={styles.profileInfo__field}>
        <label>Обо мне:
          <Field component='input'
                 placeholder='Несколько слов о себе'
                 name='aboutMe'
                 className={styles.profileInfo__input}/>
        </label>
      </div>
      <div>
        Контакты:
        {Object.keys(contacts).map(key => {
          return (
            <div key={key} className={styles.profileInfo__field}>{key}:
              <Field component='input'
                     name={'contacts.' + key}
                     placeholder={' ' + key}
                     className={styles.profileInfo__input}/>
            </div>)
        })}
      </div>
      <div className={styles.profileInfo__field}>
        В поисках работы? Да
        <Field component='input'
               type='checkbox'
               name='lookingForAJob'

        />
      </div>

      <div className={styles.profileInfo__aboutJob}>
        <div>Профессиональные навыки:</div>
            <Field component='textarea'
                   placeholder='Несколько слов о своих навыках'
                   name='lookingForAJobDescription'
                   className={styles.profileInfo__teaxtarea}/>

      </div>
      <div className={styles.profileInfoForm__buttons}>
        <button type='submit' className={styles.profileInfoForm__btn}>Сохранить</button>
        <button className={styles.profileInfoForm__btn}>Отмена</button>
      </div>

    </form>
  )
}

export default reduxForm({form: 'editProfileInfo'})(ProfileInfoForm)