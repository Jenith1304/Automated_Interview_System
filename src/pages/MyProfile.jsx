import React from 'react'
import styles from '../styles/MyProfile.module.css'
import InformationInput from '../components/InformationInput';
import Button from '../components/Button'
const MyProfile = ({ interviewer }) => {
    return (
        <>
            <div className={styles.myProfile}>
                <h2> Basic Information</h2>
                <hr />


                <div style={{ display: "flex", justifyContent: "center", gap: "55px", marginTop: "25px" }}>
                    <InformationInput label="Your Name" type="text" placeholder="John Doe" />
                    <InformationInput label="Phone" type="text" placeholder="9231456..." />
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "55px", marginTop: "25px" }}>

                    <InformationInput label="Email Address" type="email" placeholder="Johndoe@gmail.com" />
                    <InformationInput label="Website" type="text" placeholder="https://johndoe.net" />
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "55px", marginTop: "25px" }}>
                    {interviewer ?
                        <InformationInput label="Company/Department" type="text" placeholder="DRDO/Defence" />
                        :
                        <InformationInput label="Qualification" type="text" placeholder="BTech" />
                    }
                    <InformationInput label="Experience" type="text" placeholder="05 Years" />
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "55px", marginTop: "25px", marginBottom: "25px" }}>

                    <InformationInput label="State" type="text" placeholder="Delhi" />
                    <InformationInput label="City" type="text" placeholder="Noida" />
                    <InformationInput label="Postal Code" type="text" placeholder="201301" />
                </div>
                <Button text="Save Changes" active="true" />
            </div>
            <div className={styles.myProfileSocials}>
                <h2>Social Network</h2>
                <hr />
                <div style={{ display: "flex", justifyContent: "center", gap: "55px", marginTop: "25px" }}>
                    <InformationInput label="LinkedIn" type="text" placeholder="https://in.linkedin.com/" />
                    <InformationInput label="Fiver" type="text" placeholder="https://www.fiverr.com/" />
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "55px", marginTop: "25px", marginBottom: "25px" }}>
                    <InformationInput label="Github" type="text" placeholder="https://github.com/" />
                    <InformationInput label="Facebook" type="text" placeholder="https://www.facebook.com/" />
                </div>
                <Button text="Save Changes" active="true" />
            </div>
        </>
    )
}

export default MyProfile