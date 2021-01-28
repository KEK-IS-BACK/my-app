import React from 'react'
import styles from './Footer.module.css'


const Footer = () =>{
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__body}>
          Footer
        </div>
      </div>
    </footer>
  )
}

export default Footer