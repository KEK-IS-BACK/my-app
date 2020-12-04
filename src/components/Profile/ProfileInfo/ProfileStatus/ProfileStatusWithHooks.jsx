import React, {useState, useEffect} from 'react'


const ProfileStatusWithHooks = props => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  const updateStatus = () => {
    props.updateStatus(status)
  }

  const onChangeStatus = (e) => {
    setStatus(e.target.value)
  }

  return (
    <>
      {
        editMode
          ?
          <div>
            <input onBlur={() => {
                    toggleEditMode();
                    updateStatus()
                   }}
                   autoFocus={true}
                   value={status}
                   onChange={(e) => {
                     onChangeStatus(e)
                   }}
            />
          </div>
          :
          <div>
            <span onDoubleClick={toggleEditMode}>
              {status || '---'}
            </span>
          </div>

      }
    </>
  )
}

export default ProfileStatusWithHooks