import React from 'react'
import './Prelaoder.css'
import preloader from '../../../assets/images/preloader.gif'

type PropsType = {
  className?: string
}

const Preloader : React.FC<PropsType> = props => {
  const {className} = props

  return (
    <div className='preloader'>
      <div>
        <img src={preloader} alt="Preloader" className={`preloader` + className}/>
      </div>
    </div>
  )
}

export default Preloader