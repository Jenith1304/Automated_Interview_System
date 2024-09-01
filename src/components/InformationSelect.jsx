// for creating options for job BiCategory,job title
import React from 'react';
import styles from '../styles/InformationSelect.module.css';

const InformationSelect = ({ label, options }) => {
    return (
        <div className={styles.infoSelect}>
            <label>{label}</label>
            <select className={styles.select}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default InformationSelect;

