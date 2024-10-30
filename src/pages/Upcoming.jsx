import React from 'react'
import InterviewCards from '../components/InterviewCards'
import InformationInput from '../components/InformationInput'
import styles from '../styles/Upcoming.module.css'

const Upcoming = () => {
    const details = [
        {
            name: "Ratan Tata",
            imgLink: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Ratan_Tata_photo.jpg",
            jobRole: "JuniorScientist",
            time: "13:00 a.m.",
            date: "23rd June,2024"
        },
        {
            name: "Ratan Tata 2",
            imgLink: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Ratan_Tata_photo.jpg",
            jobRole: "JuniorScientist",
            time: "13:00 a.m.",
            date: "23rd June,2024"
        },
    ]
    return (
        <div className={styles.upcoming}>
            <div className={styles.upcomingHeader}>
                <h2> Upcoming Interviews </h2>
                <div>
                    <InformationInput type="text" placeholder="Search" style={{ width: "100%" }} />
                </div>
            </div>
            <hr />
            <InterviewCards type={"upcoming"} details={details} />

        </div>
    )
}

export default Upcoming