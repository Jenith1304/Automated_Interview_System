import React from 'react'
import styles from "../styles/Navbar.module.css"
import Button from './Button'
const Navbar = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={styles.navContainer}>
                    <div className={styles.navLogo}>
                        <div>
                            <img src="" alt="" />
                            <h3>Interview</h3>
                        </div>
                    </div>
                    <div className={styles.navList}>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className={styles.navLogin}>
                        <Button text="Login" active="true" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
