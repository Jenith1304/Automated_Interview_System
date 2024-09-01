import React from 'react'
import styles from '../styles/ChangePassword.module.css'
import InformationInput from '../components/InformationInput';
import Button from '../components/Button'
const ChangePassword = () => {
    return (
        <div className={styles.changePassword}>
            <h2> Basic Information</h2>
            <hr />
            <div style={{ display: "flex", justifyContent: "center", gap: "55px", marginTop: "25px" }}>
                <InformationInput label="Old Password" type="password" placeholder="" />
                <InformationInput label="New Password" type="password" placeholder="" />
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "55px", marginTop: "25px", marginBottom: "25px" }}>
                <InformationInput label="Confirm New Password" type="password" placeholder="" />
            </div>
            <Button text="Save Changes" active="true" />
        </div>
    )
}

export default ChangePassword