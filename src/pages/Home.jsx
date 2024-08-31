import React from 'react'
import styles from "../styles/Home.module.css"
import Navbar from '../components/Navbar'
import Circle from '../components/Circle'
const Home = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Navbar />
     <Circle/>
     <div className={styles.homeLeft}>
      
     </div>
     <div className={styles.homeLeft}>
      
     </div>
    </div>
  )
}

export default Home
