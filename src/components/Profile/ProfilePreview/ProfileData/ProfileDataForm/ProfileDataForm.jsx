import {Field, reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, contacts}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Полное имя:
        <Field component='input'
               placeholder='Иванов Иван Иванович'
               name='fullName'/>
      </div>
      <div>
        Обо мне:
        <Field component='input'
               placeholder='Несколько слов о себе'
               name='aboutMe'/>
      </div>
      <div>
        В поисках работы?
        <Field component='input'
               type='checkbox'
               name='lookingForAJob'/>
      </div>
      <div>
        Профессиональные навыки:
        <div>
          <Field component='textarea'
                 placeholder='Несколько слов о своих навыках'
                 name='lookingForAJobDescription'/>
        </div>
      </div>
      <div>
        Контакты:
        {Object.keys(contacts).map(key => {
          return <div>{key}:
            <Field key={key} component='input' name={'contacts.' + key} placeholder={key}/>
          </div>
        })}
      </div>

      <button type='submit'>Сохранить</button>
      <button>Отмена</button>
    </form>
  )
}

export default reduxForm({form: 'editProfileInfo'})(ProfileDataForm)