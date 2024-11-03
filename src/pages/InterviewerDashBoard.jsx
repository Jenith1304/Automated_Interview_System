
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from '../styles/InterviewerDashBoard.module.css'
import { MdEdit, MdDelete } from "react-icons/md";
import { BarChart, Bar, Rectangle } from 'recharts';
import { PieChart, Pie } from "recharts";
// For React charts `npm install recharts`
const InterviewerDashBoard = () => {
    const pastInterviews = [
        {
            name: "Ramesh Shah",
            position: "Junior Scientist",
            date: "12 june,2024",
            score: "77",
            details: "LINK",
        },
        {
            name: "Ramesh Shah",
            position: "Junior Scientist",
            date: "12 june,2024",
            score: "77",
            details: "LINK",
        },
        {
            name: "Ramesh Shah",
            position: "Junior Scientist",
            date: "12 june,2024",
            score: "77",
            details: "LINK",
        }
    ]

    //for  Performance Trends Over Time                           [Line Graph] Average Scores: Last 6 Months  
    const data = [
        {
            name: 'January',
            candidates: 200,
        },
        {
            name: 'February',
            candidates: 120,
        },
        {
            name: 'March',
            candidates: 480,
        },
        {
            name: 'April',
            candidates: 36,
        },
        {
            name: 'May',
            candidates: 150,
        },
        {
            name: 'June',
            candidates: 450,

        },
    ];

    // Score Distribution                                     [Histogram/Barchart] Scores: Distribution of Candidates   

    const bardata = [
        {
            name: '10-20',
            candidates: 45
        },
        {
            name: '20-30',
            candidates: 72,
        },
        {
            name: '30-40',
            candidates: 35,
        },
        {
            name: '40-50',
            candidates: 24,
        },
        {
            name: '50-60',
            candidates: 45,
        },
        {
            name: '60-70',
            candidates: 15,
        },
        {
            name: '70-80',
            candidates: 75,
        },
        {
            name: '80-90',
            candidates: 50,
        },
        {
            name: '90-100',
            candidates: 25,
        },
    ];

    //for Average Scores by Role   Pie chart
    const data01 = [
        { name: "Scientist", value: 78 },
        { name: "Engineer", value: 80 },
        { name: "Analyst", value: 70 },

    ];
    return (
        <div className={styles.i_DashboardContianer}>
            <h2>Dashboard</h2>
            <hr />

            <div className={styles.i_DashboardNumbers}>
                <div className={styles.i_DashboardNumbersDetails}>
                    <h3>Total Candidates:</h3>
                    <p>42</p>
                </div>
                <div className={styles.i_DashboardNumbersDetails}>
                    <h3>Average Score:</h3>
                    <p>42</p>
                </div>
            </div>

            <div className={styles.i_DashboardNumbers}>
                <div className={styles.i_DashboardNumbersDetails}>
                    <h3 >Pending Evaluations:</h3>
                    <p style={{ color: "#FF5C5C" }}>42</p>
                </div>
                <div className={styles.i_DashboardNumbersDetails}>
                    <h3>Upcoming Evaulations:</h3>
                    <p style={{ color: "#F8D568" }}>40</p>
                </div>
            </div>

            <div className={styles.i_DashboardPastInterviews}>
                <h2>Past Interviews</h2>
                <div className={styles.i_DashboardPastInterviewsTable}>
                    <table>
                        <thead>
                            <tr>
                                <th>Candidate Name</th>
                                <th>Position</th>
                                <th>Date</th>
                                <th>Overall Score</th>
                                <th>View Details</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pastInterviews.map((curValue, index) => (
                                <tr key={index}>
                                    <td data-label="Candidate Name">{curValue.name}</td>
                                    <td data-label="Position">{curValue.position}</td>
                                    <td data-label="Date">{curValue.date}</td>
                                    <td data-label="Overall Score">{curValue.score}</td>
                                    <td data-label="View Details">{curValue.details}</td>
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

            <div className={styles.i_DashboardLineGraph}>
                <h2>Performance Trends Over Time </h2>
                <ResponsiveContainer width={"100%"} height={375}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="candidates"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className={styles.i_DashboardBarChart}>
                <h2> Score Distribution  </h2>
                <ResponsiveContainer width={"100%"} height={375}>
                    <BarChart
                        data={bardata}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="candidates"
                            fill="#B3CDAD"
                            activeBar={<Rectangle fill="pink" stroke="blue" />}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.i_DashboardPieChartContainer}>
                <div className={styles.i_DashboardPieChart}>
                    <h2>Average Scores by Role </h2>
                    <PieChart width={300} height={375} >
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={data01}
                            cx={150}
                            cy={170}
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
                <div className={styles.i_DashboardPieChartContainerRight}>
                    <div className={styles.right_1} >
                        <h3>Average Time For Evaluation</h3>
                        <p>45 mins</p>
                    </div>
                    <div className={styles.right_2}>
                        <h3>Feedback received</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti incidunt nulla quis illum deserunt ex.</p>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default InterviewerDashBoard