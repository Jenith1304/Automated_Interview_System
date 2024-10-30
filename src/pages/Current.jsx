import React from 'react'
import InterviewCards from '../components/InterviewCards'
import InformationInput from '../components/InformationInput'
import styles from '../styles/Current.module.css'

const Current = () => {
    const details = [
        {
            name: "Ratan Tata",
            imgLink: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Ratan_Tata_photo.jpg",
            jobRole: "JuniorScientist",
            time: "13:00 a.m.",
        },
        {
            name: "Ratan Tata 2",
            imgLink: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Ratan_Tata_photo.jpg",
            jobRole: "JuniorScientist",
            time: "13:00 a.m.",
        },
    ]
    return (
        <div className={styles.current}>
            <div className={styles.currentHeader}>
                <h2> Current Interviews </h2>
                <div>
                    <InformationInput type="text" placeholder="Search" style={{ width: "100%" }} />
                </div>
            </div>
            <hr />
            <InterviewCards type={"current"} details={details} />

        </div>
    )
}

export default Current