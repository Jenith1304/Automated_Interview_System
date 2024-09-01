import React from 'react'
import styles from '../styles/InformationInput.module.css'
const InformationInput = ({ label, type, placeholder, ...rest }) => {
    return (
        <div className={styles.infoInput} {...rest}>
            <label>{label}</label>
            <input type={type} placeholder={placeholder}></input>
        </div>

    )
}

export default InformationInput