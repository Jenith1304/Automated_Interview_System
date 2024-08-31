// CircleComponent.jsx
import React from 'react';
import styles from '../styles/Circle.module.css';

const Circle = () => {
  return (
    <div className={styles.circleContainer}>
      <div className={`${styles.circle} ${styles.circle1}`}>
        <div className={`${styles.dot} ${styles.dot1}`}></div>
      </div>
      <div className={`${styles.circle} ${styles.circle2}`}>
        <div className={`${styles.dot} ${styles.dot2}`}></div>
      </div>
      <div className={`${styles.circle} ${styles.circle3}`}>
        <div className={`${styles.dot} ${styles.dot3}`}></div>
      </div>
    </div>
  );
};

export default Circle;
