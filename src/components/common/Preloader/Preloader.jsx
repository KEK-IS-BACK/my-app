import React from 'react'
import './Prelaoder.css'
import preloader from '../../../assets/images/preloader.gif'

let Preloader = props => {
  return (
    <div className='preloader'>
      <div>
        <img src={preloader} alt="Preloader" className={`preloader` + props.className}/>
      </div>
    </div>
  )
}

export default Preloader