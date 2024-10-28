import React from 'react'
import styles from '../styles/ScheduledInterview.module.css'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import ManageJobs from './ManageJobs';
import PostJobs from './PostJobs';
import MyProfile from './MyProfile';
import Upcoming from './Upcoming';

const ScheduledInterviews = () => {
    return (
        <div className={styles.interviewCards}>
            {/* <Link to="/scheduleinterview/upcoming" className={styles.link}> */}
            <div className={styles.cards} >
                <div className={styles.cardsTop}>
                    <h3>Current</h3>
                    <div className={styles.cardsNumber}>
                        <h1>2</h1>
                    </div>
                </div>
                <div className={styles.cardsBottom}>
                    <p>Shows Interview Which are scheduled for today</p>
                </div>
            </div>
            {/* </Link> */}
            <div className={styles.cards}>
                <div className={styles.cardsTop}>
                    <h3>Upcoming</h3>
                    <div className={styles.cardsNumber}>
                        <h1>15</h1>
                    </div>
                </div>
                <div className={styles.cardsBottom}>
                    <p>Shows Interview Which are scheduled</p>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.cardsTop}>
                    <h3>Previous</h3>
                    <div className={styles.cardsNumber}>
                        <h1>17</h1>
                    </div>
                </div>
                <div className={styles.cardsBottom}>
                    <p>Shows Interview Which have already been taken</p>
                </div>

            </div>
            {/* <Routes>
                <Route path='/scheduleinterview/*' element={<ScheduledInterviews />} />
                <Route path='/upcoming' element={<Upcoming />} />
                <Route path='/current' element={<Current />} />
                <Route path='/previous' element={<Previous />} />
                <Route path='/' element={<MyProfile />} />
            </Routes> */}
        </div>
    )
}

export default ScheduledInterviews