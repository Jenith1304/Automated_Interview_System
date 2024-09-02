import React from 'react'
import styles from "../styles/PostJobs.module.css"
import InformationInput from '../components/InformationInput'
import Button from '../components/Button'
import InformationSelect from '../components/InformationSelect'
const PostJobs = () => {
    const category = [
        { value: 'junior scientist', label: 'Junior Scientist' },
        { value: 'senior scientist', label: 'Senior Scientist' },
        { value: 'research analyst', label: 'Research Analyst' },
        { value: 'software engineer', label: 'Software Engineer' },
    ];
    const type = [
        { value: 'full time', label: 'Full Time' },
        { value: 'part time', label: 'Part Time' },
        { value: 'internship', label: 'Internship' },
        { value: 'temporary', label: 'Temporary' },
    ];
    return (
        <div className={styles.postJob}>
            <h2> Job Details</h2>
            <hr />
            <div style={{ display: "flex", justifyContent: "center", gap: "55px", marginTop: "25px" }}>
                <InformationInput label="Job Title" type="text" placeholder="Junior Scientist" />
                <InformationSelect label="Select Category" options={category} />
                <InformationSelect label="Select Type" options={type} />
                {/* <InformationInput label="Qualification" type="text" placeholder="https:/Btech" /> */}
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "55px", marginTop: "25px" }}>
                <InformationInput label="Offered Salary in LPA" type="text" placeholder="05" />
                <InformationInput label="Minumum Experience" type="text" placeholder="02" />
                <InformationInput label="Qualification" type="text" placeholder="BTech" />
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "55px", marginTop: "25px" }}>
                <InformationInput label="Email" type="email" placeholder="drodo@gmail.com" />
                <InformationInput label="Website" type="text" placeholder="https://www.drdo.gov.in/drdo/" />
                <InformationInput label="Est. Since" type="text" placeholder="1958" />
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "55px", marginTop: "25px" }}>
                <InformationInput label="Complete Address" type="text" placeholder="1,ABC Flat,Noida,Delhi" style={{ width: "100%" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "55px", marginTop: "25px" }}>
                <div className={styles.postJobtextarea}>
                    <label>Description</label>
                    <textarea rows={7} placeholder="The Defence Research and Development Organisation (DRDO) is an agency of the Indian government responsible for the research, development, and production of advanced technology and equipment for India's military and defense sectors."></textarea>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "55px", marginTop: "25px", marginBottom: "25px" }}>
                <InformationInput label="Start Date" type="date" style={{ width: "100%" }} />
                <InformationInput label="End Date" type="date" style={{ width: "100%" }} />
            </div>
            <Button text="Post Jobs" active="true" />
        </div>
    )
}

export default PostJobs