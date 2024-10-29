import React from 'react'
import styles from '../styles/InterviewCards.module.css'
import Button from './Button'

const InterviewCards = () => {
    return (
        <div className={styles.cardsContainer}>
            <div className={styles.cards}>
                <div className={styles.cardsImage}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Ratan_Tata_photo.jpg" alt="Candidate Profile" />
                </div>

                <div className={styles.cardsInfo}>
                    <h3>Ratan Tata</h3>
                    <p style={{ textAlign: "center" }}>Junior Scientist</p>
                    <p>23rd June,2024@13.00 a.m</p>
                    {/* <p>13:00 a.m</p> */}
                    <div className={styles.cardsButton}>
                        <Button text="Update" active="true"></Button>
                        <Button text="Delete" active="false"></Button>
                    </div>

                </div>

            </div>
            <div className={styles.cards}>
                <div className={styles.cardsImage}>
                    <img src="https://www.equitypandit.com/wp-content/uploads/2020/12/EP-Ratan-Tata.jpeg" alt="Candidate Profile" />
                </div>

                <div className={styles.cardsInfo}>
                    <h3>Ratan Tata</h3>
                    <p style={{ textAlign: "center" }}>Junior Scientist</p>
                    <p>23rd June,2024@13.00 a.m</p>
                    {/* <p>13:00 a.m</p> */}
                    <div className={styles.cardsButton}>
                        <Button text="Update" active="true"></Button>
                        <Button text="Delete" active="false"></Button>
                    </div>

                </div>

            </div>
            <div className={styles.cards}>
                <div className={styles.cardsImage}>
                    <img src="https://www.equitypandit.com/wp-content/uploads/2020/12/EP-Ratan-Tata.jpeg" alt="Candidate Profile" />
                </div>
                <div className={styles.cardsInfo}>
                    <h3>Ratan Tata</h3>
                    <p style={{ textAlign: "center" }}>Junior Scientist</p>
                    <p>23rd June,2024@13.00 a.m</p>
                    {/* <p>13:00 a.m</p> */}
                    <div className={styles.cardsButton}>
                        <Button text="Update" active="true"></Button>
                        <Button text="Delete" active="false"></Button>
                    </div>

                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.cardsImage}>
                    <img src="https://www.equitypandit.com/wp-content/uploads/2020/12/EP-Ratan-Tata.jpeg" alt="Candidate Profile" />
                </div>
                <div className={styles.cardsInfo}>
                    <h3>Ratan Tata</h3>
                    <p style={{ textAlign: "center" }}>Junior Scientist</p>
                    <p>23rd June,2024@13.00 a.m</p>
                    {/* <p>13:00 a.m</p> */}
                    <div className={styles.cardsButton}>
                        <Button text="Update" active="true"></Button>
                        <Button text="Delete" active="false"></Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InterviewCards