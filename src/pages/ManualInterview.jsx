import React from 'react'
import styles from '../styles/ManualInterview.module.css'
import Button from '../components/Button'
import { IoMicOutline } from "react-icons/io5";
import { IoMicOffOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { IoVideocamOffOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import InformationInput from '../components/InformationInput';
const ManualInterview = () => {
    return (
        <div className={styles.callContainer}>
            <div className={styles.callLeft}>
                <div className={styles.callHeader}>
                    <h2>Defence Research and Development Organisation</h2>
                    <h4>Balasya Mulam Vigyanam</h4>
                </div>
                <div className={styles.callVideo}>hello</div>
                <div className={styles.callControls}>
                    <button><IoMicOutline /></button>
                    <button><IoMicOffOutline /></button>
                    <button><IoVideocamOutline /></button>
                    <button><IoVideocamOffOutline /></button>
                    <button><IoCallOutline /></button>
                </div>
            </div>
            <div className={styles.callRight}>
                <div className={styles.callHeader} >
                    <h3>Your Chat</h3>
                    <hr />
                </div>

                <div className={styles.chatConvo}>
                    <div className={styles.chatConvo_Candidate}>
                        <label>You:</label>
                        <div className={styles.chatMessage}><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, temporibus nihil cumque incidunt porro asperiores?</p></div>
                    </div >
                    <div className={styles.chatConvo_Interviewer}>
                        <label>Interviewer:</label>
                        <div className={styles.chatMessage}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa quam eum ullam! Fuga et id asperiores animi quaerat vitae voluptatibus sint fugit natus, dolore temporibus consequatur aut, rerum magni?</p></div>
                    </div>
                    <div className={styles.chatConvo_Candidate}>
                        <label>You:</label>
                        <div className={styles.chatMessage}><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, temporibus nihil cumque incidunt porro asperiores?</p></div>
                    </div>
                    <div className={styles.chatConvo_Interviewer}>
                        <label>Interviewer:</label>
                        <div className={styles.chatMessage}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa quam eum ullam! Fuga et id asperiores animi quaerat vitae voluptatibus sint fugit natus, dolore temporibus consequatur aut, rerum magni?</p></div>
                    </div>
                    <div className={styles.chatConvo_Candidate}>
                        <label>You:</label>
                        <div className={styles.chatMessage}><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, temporibus nihil cumque incidunt porro asperiores?</p></div>
                    </div>
                    <div className={styles.chatConvo_Interviewer}>
                        <label>Interviewer:</label>
                        <div className={styles.chatMessage}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa quam eum ullam! Fuga et id asperiores animi quaerat vitae voluptatibus sint fugit natus, dolore temporibus consequatur aut, rerum magni?</p></div>
                    </div>
                </div>
                <div className={styles.chatInput}>
                    <InformationInput type="text" placeholder="Enter Message" style={{ width: "85%" }} />
                    <Button text="send" active="true" />
                </div>
            </div>

        </div >
    )
}

export default ManualInterview