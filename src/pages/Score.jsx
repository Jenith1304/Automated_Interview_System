import React from 'react'
import styles from '../styles/Score.module.css'
import InformationInput from '../components/InformationInput';
import Button from '../components/Button'

const Score = () => {
    return (
        <div className={styles.scoreContainer}>
            <h2>Candidate Evaluation </h2>
            <hr />

            {/* Evaluation 1 */}
            <h4 >1. Communication Skills</h4>
            <div className={styles.skill1}>
                <div className={styles.commSkill}>
                    <InformationInput label="1.1 Clarity" type="text" placeholder="[1-5]" style={{ width: "80%", marginTop: "15px" }} />
                    <label style={{ marginTop: "15px" }}>Comments:</label><br />
                    <textarea>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla ut facilis omnis fuga molestias.</textarea>
                </div>
                <div className={styles.commSkill}>
                    <InformationInput label="1.2 Communicatrion Skill" type="text" placeholder="[1-5]" style={{ width: "80%", marginTop: "15px" }} />
                    <label style={{ marginTop: "15px" }}>Comments:</label><br />
                    <textarea>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla ut facilis omnis fuga molestias.</textarea>
                </div>
            </div>


            {/* Evaluation 2 */}
            <h4 >2. Understanding and Knowledge</h4>
            <div className={styles.skill1}>
                <div className={styles.commSkill}>
                    <InformationInput label="2.1 Understanding" type="text" placeholder="[1-5]" style={{ width: "80%", marginTop: "15px" }} />
                    <label style={{ marginTop: "15px" }}>Comments:</label><br />
                    <textarea>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla ut facilis omnis fuga molestias.</textarea>
                </div>
                <div className={styles.commSkill}>
                    <InformationInput label="2.2 Technical Knowledge	" type="text" placeholder="[1-5]" style={{ width: "80%", marginTop: "15px" }} />
                    <label style={{ marginTop: "15px" }}>Comments:</label><br />
                    <textarea>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla ut facilis omnis fuga molestias.</textarea>
                </div></div>


            {/* Evaluation 3 */}
            <h4 >3. Analytical and Problem-Solving Skills</h4>
            <div className={styles.skill1}>
                <div className={styles.commSkill}>
                    <InformationInput label="3.1 Problem-Solving Skills" type="text" placeholder="[1-5]" style={{ width: "80%", marginTop: "15px" }} />
                    <label style={{ marginTop: "15px" }}>Comments:</label><br />
                    <textarea>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla ut facilis omnis fuga molestias.</textarea>
                </div>
                <div className={styles.commSkill}>
                    <InformationInput label="3.2 Feasibilty" type="text" placeholder="[1-5]" style={{ width: "80%", marginTop: "15px" }} />
                    <label style={{ marginTop: "15px" }}>Comments:</label><br />
                    <textarea>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla ut facilis omnis fuga molestias.</textarea>
                </div></div>

            {/* Evaluation 4 */}
            <h4 >4. Adaptability and Learning Agility</h4>
            <div className={styles.skill1}>
                <div className={styles.commSkill}>
                    <InformationInput label="4.1 Flexibility" type="text" placeholder="[1-5]" style={{ width: "80%", marginTop: "15px" }} />
                    <label style={{ marginTop: "15px" }}>Comments:</label><br />
                    <textarea>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla ut facilis omnis fuga molestias.</textarea>
                </div>
                <div className={styles.commSkill}>
                    <InformationInput label="4.2 Innovativeness" type="text" placeholder="[1-5]" style={{ width: "80%", marginTop: "15px" }} />
                    <label style={{ marginTop: "15px" }}>Comments:</label><br />
                    <textarea>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla ut facilis omnis fuga molestias.</textarea>
                </div></div>


            <Button text="Submit" active="true" style={{ width: "100%" }} />


        </div>
    )
}

export default Score