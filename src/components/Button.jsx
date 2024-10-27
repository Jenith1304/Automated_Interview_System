import React from 'react'
import styles from '../styles/Button.module.css'
const Button = ({ text, active,onClick }) => {
    return (
        <button className={active == "true" ? `${styles.btnActive}` : `${styles.btnInactive}` }onClick={onClick}>{text}</button>
    )
}

export default Button