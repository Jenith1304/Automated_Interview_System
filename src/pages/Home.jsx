import React from 'react'
import styles from "../styles/Home.module.css"
import Navbar from '../components/Navbar'
import Circle from '../components/Circle'
// import styles from "../css/Home.module.css";
import step1Img from "/images/main.png";
import step1 from '/images/01.png'
import step2 from '/images/02.png'
import step3 from '/images/03.png'

import { Login } from './Login'
const Home = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "8%",
      marginLeft:"7%",
      height: "80vh",
      alignItems: "center",
      flexDirection: "column",
      width:"100%",
      // backgroundColor:"red"
  }}>
      <div className={styles.mainContainer}>
        <div className={styles.mainLeft}>
          <h1>
            Find the <span style={{ color: "blue" }}>job</span> that fits yours
            life
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            rerum{" "}
          </p>
        </div>

        <div className={styles.mainRight}>
          {/* <h1>Right</h1> */}
        </div>
      </div>

      <div className={styles.mainWorkingProcess}>
        <div>
          <p style={{ color: "blue" }}>Working Process</p>
          <h1>How It Works</h1>
        </div>
        <div className={styles.mainWorkingProcessSteps}>

          <div>
            <div>
              <img src={step1} className={styles.stepImage}></img>
            </div>
            <div className={`${styles.stepsContainer} ${styles.step1Containerbg}`}>
              <img src={step1Img} style={{ marginRight: '1rem' }} alt="step1"></img>
              <p className={styles.textColorWhite}>
                <span style={{ display: "block", textAlign: 'left' }}><h5>Register</h5></span>
                <span ><h5>Your Account</h5></span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={step2} className={styles.stepImage}></img>
            </div>
            <div className={`${styles.stepsContainer} ${styles.step2Containerbg}`}>
              <img src={step1Img} style={{ marginRight: '1rem' }} alt="step1"></img>
              <p className={styles.textColorWhite}>
                <span style={{ display: "block", textAlign: 'left' }}><h5>Register</h5></span>
                <span ><h5>Your Account</h5></span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={step3} className={styles.stepImage}></img>
            </div>
            <div className={`${styles.stepsContainer} ${styles.step3Containerbg}`}>
              <img src={step1Img} style={{ marginRight: '1rem' }} alt="step1"></img>
              <p className={styles.textColorWhite}>
                <span style={{ display: "block", textAlign: 'left' }}><h5>Register</h5></span>
                <span ><h5>Your Account</h5></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home


/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import React from "react";
// import styles from "../css/Home.module.css";
// import step1Img from "../Images/main_bg_hd.png";
// import step1 from '../Images/01.png'
// import step2 from '../Images/02.png'
// import step3 from '../Images/03.png'

// export default function Home() {
//   return (
//     <div style={{ width: "100%" }}>
//       <div className={styles.mainContainer}>
//         <div className={styles.mainLeft}>
//           <h1>
//             Find the <span style={{ color: "blue" }}>job</span> that fits yours
//             life
//           </h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
//             rerum{" "}
//           </p>
//         </div>

//         <div className={styles.mainRight}>
//           <h1>Right</h1>
//         </div>
//       </div>

//       <div className={styles.mainWorkingProcess}>
//         <div>
//           <p style={{ color: "blue" }}>Working Process</p>
//           <h1>How It Works</h1>
//         </div>
//         <div className={styles.mainWorkingProcessSteps}>

//           <div>
//             <div>
//               <img src={step1} className={styles.stepImage}></img>
//             </div>
//             <div className={${styles.stepsContainer} ${styles.step1Containerbg}}>
//               <img src={step1Img} style={{ marginRight: '1rem' }} alt="step1"></img>
//               <p className={styles.textColorWhite}>
//                 <span style={{ display: "block", textAlign: 'left' }}><h5>Register</h5></span>
//                 <span ><h5>Your Account</h5></span>
//               </p>
//             </div>
//           </div>
//           <div>
//             <div>
//               <img src={step2} className={styles.stepImage}></img>
//             </div>
//             <div className={${styles.stepsContainer} ${styles.step2Containerbg}}>
//               <img src={step1Img} style={{ marginRight: '1rem' }} alt="step1"></img>
//               <p className={styles.textColorWhite}>
//                 <span style={{ display: "block", textAlign: 'left' }}><h5>Register</h5></span>
//                 <span ><h5>Your Account</h5></span>
//               </p>
//             </div>
//           </div>
//           <div>
//             <div>
//               <img src={step3} className={styles.stepImage}></img>
//             </div>
//             <div className={${styles.stepsContainer} ${styles.step3Containerbg}}>
//               <img src={step1Img} style={{ marginRight: '1rem' }} alt="step1"></img>
//               <p className={styles.textColorWhite}>
//                 <span style={{ display: "block", textAlign: 'left' }}><h5>Register</h5></span>
//                 <span ><h5>Your Account</h5></span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }