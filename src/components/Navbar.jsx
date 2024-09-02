import React, { useState } from 'react';
import styles from "../styles/Navbar.module.css";
import Button from './Button';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={styles.navContainer}>
                    <div className={styles.navLogo}>
                        <div>
                            <img src="/path/to/logo.png" alt="Logo" /> {/* Update logo path */}
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
                    <div className={styles.hamburger} onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li><Button text="Login" active="true" /></li> {/* Include Login button */}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
