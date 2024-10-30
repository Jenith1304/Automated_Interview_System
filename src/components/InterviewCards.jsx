import React from 'react'
import styles from '../styles/InterviewCards.module.css'
import Button from './Button'

const InterviewCards = ({ type, details }) => {
    console.log(details)
    return (
        <div className={styles.cardsContainer}>
            {details.map((value, id) => (

                <div className={styles.cards} key={id}>
                    <div className={styles.cardsImage}>
                        <img src={value.imgLink} alt="Candidate Profile" />
                    </div>

                    <div className={styles.cardsInfo}>
                        <h3>{value.name}</h3>
                        <p style={{ textAlign: "center" }}>{value.jobRole}</p>
                        {/* here display date and time for future(upcoming) interviews */}
                        {type == "upcoming" ? <p>{value.date}@{value.time}</p> : <p>{value.time}</p>}
                        {/* here display only time for today's(current) interviews */}
                        <div className={styles.cardsButton}>
                            {/* here display update and delete for future(upcoming) interviews */}
                            {type == "upcoming" ? <Button text="Update" active="true"></Button> : <Button text="Join" active="true"></Button>}
                            {/* here display Join and delete for today's(current)  interviews */}
                            <Button text="Delete" active="false"></Button>
                        </div>

                    </div>

                </div>

            ))}
        </div>
    )
}

export default InterviewCards