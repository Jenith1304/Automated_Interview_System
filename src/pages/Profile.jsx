import React from 'react'
import styles from '../styles/Profile.module.css'
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaExchangeAlt } from "react-icons/fa";
import InformationInput from '../components/InformationInput';
import Button from '../components/Button'
import MyProfile from './MyProfile';
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineUpload } from "react-icons/md";
import ChangePassword from './ChangePassword';
import InformationSelect from '../components/InformationSelect';
import PostJobs from './PostJobs';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

import ManageJobs from './ManageJobs';
import ScheduledInterviews from './ScheduledInterviews';
import Upcoming from './Upcoming';
import Current from './Current';

import InterviewCards from '../components/InterviewCards';
import ManualInterview from './ManualInterview';

const Profile = ({ interviewer }) => {


    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "8%",
            height: "auto",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px"
        }}>
            {/* profileContainer */}

            {/* <div className={styles.profileContainer}> */}

            {/* header Section */}

            {/* <div className={styles.profileHeader}>
                    {interviewer ? <h2>Interviewer Profile</h2> : <h2>Candidate Profile</h2>}
                    <label className={styles.profileHomeLabel}>Home </label>
                    {interviewer ? <label>-  Interviewer Profile</label> : <label>-  Candidate Profile</label>}
                </div> */}

            {/* profile main section */}

            {/* <div className={styles.profileMain}> */}

            {/* Left Section */}

            {/* <div className={styles.profileLeft}>
                        <div className={styles.profilePic}>
                            <img src="https://www.3dmodels-textures.com/sitepad-data/uploads/2021/08/2.png" alt="Profile Photo" />
                            <button className={styles.editButton}>Edit</button>
                        </div>
                        <h3>Name</h3>
                        <h5>Position</h5>
                        <div className={styles.profileOptions}>
                            <ul>
                                <li ><MdDashboard /><Link to="" className={styles.link}>Dashboard</Link></li>
                                <li className={styles.active}><CgProfile /><Link to="/profile/" className={styles.link}>MyProfile</Link></li>
                                {interviewer ?
                                    <>
                                        <li><MdOutlineUpload />  <Link to="/profile/scheduledinterview" className={styles.link}>Scheduled Inteviews</Link> </li>
                                        <li><MdOutlineManageAccounts /><Link to="/profile/managejobs" className={styles.link}>Manage Jobs</Link></li>
                                    </>
                                    : <li><VscWorkspaceTrusted /><Link to="" className={styles.link}>Applied Jobs</Link></li>}
                                <li><FaExchangeAlt />  <Link to="/profile/changepassword" className={styles.link}>Change Password</Link></li>
                            </ul>
                        </div>
                    </div> */}

            {/* Right Section */}

            {/* <div className={styles.profileRight}> */}

            {/* <MyProfile interviewer={interviewer} /> */}
            {/* <ChangePassword /> */}
            {/* <PostJobs /> */}
            {/* <ManageJobs /> */}
            {/* <Outlet/> */}
            {/* <Routes>
                            <Route path='changepassword' element={<ChangePassword />} />
                            <Route path='/profile/*' element={<Profile interviewer={interviewer} />} />
                            <Route path='/managejobs' element={<ManageJobs />} />
                            <Route path='/postjobs' element={<PostJobs />} />
                            <Route path='/scheduledinterview' element={<ScheduledInterviews />} />
                            <Route path='/' element={<MyProfile />} />
                        </Routes> */}
            {/* <Upcoming /> */}
            {/* <Current /> */}
            {/* </div>
                </div>
            </div> */}
            <ManualInterview />
        </div>
    )
}

export default Profile