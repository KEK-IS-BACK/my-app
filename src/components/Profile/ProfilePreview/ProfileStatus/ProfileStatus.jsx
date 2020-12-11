import React, {useState, useEffect} from 'react'
import styles from './ProfileStatus.module.css'


const ProfileStatus = props => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)
  const [newStatus, setNewStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
    setNewStatus(props.status)
  }, [props.status])

  const toggleEditMode = () => {
    setEditMode(prev => !prev)
  }

  const updateStatus = () => {
    props.updateStatus(newStatus)
    toggleEditMode()
  }

  const onChangeStatus = (e) => {
    setNewStatus(e.target.value)
  }

  return (
    <div className={styles.profileStatus}>
      {
        editMode
          ?
          <div className={styles.profileStatus__body_editMode}>
            <input className={styles.profileStatus__input}
                   autoFocus={true}
                   value={newStatus}
                   onChange={(e) => {
                     onChangeStatus(e)
                   }}
            />
            <div className={styles.profileStatus__buttons}>
              <button onClick={updateStatus} className={styles.profileStatus__btn}>Сохранить</button>
              <button onClick={toggleEditMode} className={styles.profileStatus__btn}>Отмена</button>
            </div>
          </div>
          :
          <div onClick={toggleEditMode} className={styles.profileStatus__body}>
            {status || 'Установить статус'}
          </div>


      }
    </div>
  )
}

export default ProfileStatus