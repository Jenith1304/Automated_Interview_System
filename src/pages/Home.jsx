import React from 'react'
import styles from "../styles/Home.module.css"
import Navbar from '../components/Navbar'
import Circle from '../components/Circle'
import { Login } from './Login'
const Home = () => {
  return (
    <div >
      {/* <div className={styles.homeLeft}>
      
     </div>
     <div className={styles.homeLeft}>
      
     </div> */}
      <Login />
    </div>
  )
}

export default Home
