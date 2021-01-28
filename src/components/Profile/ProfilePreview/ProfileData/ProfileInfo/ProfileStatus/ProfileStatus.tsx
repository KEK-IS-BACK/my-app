import React, {useState, useEffect, ChangeEvent} from 'react'
import styles from './ProfileStatus.module.css'

type PropsType = {
  status: string
  updateStatus: (newStatus: string) => void
}

const ProfileStatus: React.FC<PropsType> = props => {
  const {status, updateStatus} = props


  const [editMode, setEditMode] = useState(false)
  const [currentStatus, setStatus] = useState(status)
  const [newStatus, setNewStatus] = useState(status)

  useEffect(() => {
    setStatus(status)
    setNewStatus(status)
  }, [status])

  const toggleEditMode = () => {
    setEditMode(prev => !prev)
  }

  const updateStatusHandler = () => {
    updateStatus(newStatus)
    toggleEditMode()
  }

  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
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
              <button onClick={updateStatusHandler} className={styles.profileStatus__btn}>Сохранить</button>
              <button onClick={toggleEditMode} className={styles.profileStatus__btn}>Отмена</button>
            </div>
          </div>
          :
          <div onClick={toggleEditMode} className={styles.profileStatus__body}>
            {currentStatus || 'Установить статус'}
          </div>


      }
    </div>
  )
}

export default ProfileStatus