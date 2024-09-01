import React from 'react'
import styles from '../styles/Button.module.css'
const Button = ({ text, active }) => {
    return (
        <button className={active == "true" ? `${styles.btnActive}` : `${styles.btnInactive}`}>{text}</button>
    )
}

export default Button