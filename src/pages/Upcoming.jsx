import React from 'react'
import InterviewCards from '../components/InterviewCards'
import InformationInput from '../components/InformationInput'
import styles from '../styles/Upcoming.module.css'

const Upcoming = () => {
    return (
        <div className={styles.upcoming}>
            <div className={styles.upcomingHeader}>
                <h2> Upcoming Interviews </h2>
                <div>
                    <InformationInput type="password" placeholder="Search" style={{ width: "100%" }} />
                </div>
            </div>
            <hr />
            <InterviewCards />

        </div>
    )
}

export default Upcoming