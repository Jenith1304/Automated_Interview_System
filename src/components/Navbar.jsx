import React, { useState } from 'react';
import styles from "../styles/Navbar.module.css";
import Button from './Button';
import { useNavigate,Link  } from 'react-router-dom';
const Navbar = ({interviewer}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    //when i click on login button it is routed to Login page
    const navigate = useNavigate();
    const handleLogin=()=>{
        navigate('/login'); 
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={styles.navContainer}>
                    <div className={styles.navLogo}>
                        <div>
                            <img src="/images/LOGO.png" alt="Logo" /> {/* Update logo path */}
                            <h3>Interview</h3>
                        </div>
                    </div>
                    <div className={styles.navList}>
                        <ul>
                            <li><Link to="/" className={styles.link}>Home</Link></li>
                            <li><Link to="/"className={styles.link}>About</Link></li>
                            <li><Link to="/"className={styles.link}>Contact</Link></li>
                            <li><Link to="/profile"className={styles.link}>Profile</Link></li>
                        </ul>
                    </div>
                    <div className={styles.navLogin}>
                        <Button text="Login" active="true" onClick={handleLogin}/>
                    </div>
                    <div className={styles.hamburger} onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
                    <ul>
                        <li><Link to="/" className={styles.navItem}>Home</Link></li>
                        <li><Link to="/" className={styles.navItem}>About</Link></li>
                        <li><Link to="/" className={styles.navItem}>Contact</Link></li>
                        <li><Button text="Login" active="true"  onClick={handleLogin}/></li> {/* Include Login button */}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
