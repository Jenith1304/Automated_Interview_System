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

const Profile = ({ interviewer }) => {

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "8%",
            height: "auto",
            alignItems: "center",
            flexDirection: "column"
        }}>
            {/* profileContainer */}
            <div className={styles.profileContainer}>
                {/* header Section */}
                <div className={styles.profileHeader}>
                    {interviewer ? <h2>Interviewer Profile</h2> : <h2>Candidate Profile</h2>}
                    <label className={styles.profileHomeLabel}>Home </label>
                    {interviewer ? <label>-  Interviewer Profile</label> : <label>-  Candidate Profile</label>}
                </div>
                {/* profile main section */}
                <div className={styles.profileMain}>
                    {/* Left Section */}
                    <div className={styles.profileLeft}>
                        <div className={styles.profilePic}>
                            <img src="https://www.3dmodels-textures.com/sitepad-data/uploads/2021/08/2.png" alt="Profile Photo" />
                            <button className={styles.editButton}>Edit</button>
                        </div>
                        <h3>Name</h3>
                        <h5>Position</h5>
                        <div className={styles.profileOptions}>
                            <ul>
                                <li ><MdDashboard />  Dashboard </li>
                                <li className={styles.active}><CgProfile />   My Profile</li>
                                {interviewer ?
                                    <>
                                        <li><MdOutlineUpload />  Post A Job</li>
                                        <li><MdOutlineManageAccounts />  Manage Jobs</li>
                                    </>
                                    : <li><VscWorkspaceTrusted />   Applied Jobs</li>}
                                <li><FaExchangeAlt />   Change Password</li>
                            </ul>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className={styles.profileRight}>
                        {/* <MyProfile interviewer={interviewer} /> */}
                        {/* <ChangePassword /> */}
                        <PostJobs />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile