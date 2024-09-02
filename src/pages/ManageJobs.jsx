import React from 'react'
import styles from "../styles/ManageJobs.module.css"
import { MdEdit, MdDelete } from "react-icons/md";

const ManageJobs = () => {
    const jobsInfo = [
        {
            title: "Junior Scientist",
            category: "Junior Scientist",
            type: "Full Time",
            applied: "12",
            status: "Active",
        },
        {
            title: "Junior Scientist",
            category: "Junior Scientist",
            type: "Full Time",
            applied: "12",
            status: "Active",
        },
        {
            title: "Junior Scientist",
            category: "Junior Scientist",
            type: "Full Time",
            applied: "12",
            status: "Active",
        }
    ]
    return (
        <>
            <div className={styles.manageJobs}>
                <h2>Manage Jobs</h2>
                <hr />
                <div className={styles.manageJobsTable}>
                    <table>
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Job Category</th>
                                <th>Job Types</th>
                                <th>Candidates Applied</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobsInfo.map((curValue, index) => (
                                <tr key={index}>
                                    <td data-label="Job Title">{curValue.title}</td>
                                    <td data-label="Job Category">{curValue.category}</td>
                                    <td data-label="Job Types">{curValue.type}</td>
                                    <td data-label="Candidates Applied">{curValue.applied} Applied</td>
                                    <td data-label="Status">{curValue.status}</td>
                                    <td data-label="Action" className={styles.actionIcons}>
                                        <MdEdit />
                                        <MdDelete />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ManageJobs
