import React from 'react'
import preloader from '../../assets/images/preloader.gif'

let Preloader = props => {
  return (
    <div>
      <img src={preloader} alt="Preloader"/>
    </div>
  )
}

export default Preloader