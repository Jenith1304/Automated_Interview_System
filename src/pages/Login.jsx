import React, { useState } from 'react'
import styles from "../styles/Login.module.css"
import Button from '../components/Button'
import { signInWithGoogle } from '../utilities/signInWithGoogle'
import { signInWithEmail } from '../utilities/signInWithEmail'

export const Login = () => {

    // States
    const [user, setUser] = useState({ userID: '', email: '', password: '' })


    const handleUser = (target) => {
        const { name, value } = target
        setUser({ ...user, [name]: value })
    }

    const handleSignin = async () => {
        const uid = await signInWithEmail(user)

    }

    const handleSignWIthGoogle = async () => {
        const uid = await signInWithGoogle()

    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "8%",
            height: "70vh",
            flexDirection: "column",
            alignItems: "center"
        }}>

            <div className={styles.loginContainer}>
                {/* for blue strip at top  */}
                <div className={styles.blueStrip}></div>
                {/* for heading of login  */}
                <div className={styles.loginHeading}>
                    <h1>Login</h1>
                    <p>
                        Log In and get access to all the features
                    </p>
                </div>
                {/* Login Form */}
                <div className={styles.loginForm}>
                    {/* RoleButtons */}
                    <div className={styles.loginRoles}>
                        <Button text="Interviewer" active="true" />
                        <Button text="Interviewee" active="false" />
                    </div>
                    <div className={styles.loginDetails}>
                        <div className={styles.formLogin}>
                            <input type="email" placeholder='Email' value={user.email} name='email' onChange={({ target }) => handleUser(target)} />
                            <input type="password" placeholder='Password' value={user.password} name='password' onChange={({ target }) => handleUser(target)} />
                            <button onClick={() => handleSignin()}>Log In</button>
                        </div>
                    </div>

                </div>
                {/* Login with */}
                <div className={styles.loginWith}>
                    <button type="submit" onClick={() => handleSignWIthGoogle()}><img src="/images/Google.png" /></button>
                </div>
            </div>
        </div >
    )
}
