import React from 'react'
import styles from './Button.module.css'
import { CarFront } from 'lucide-react'

const Button = ({ title, color }) => {
    return (
        <div className={styles.buttonContainer} style={{ color: color,border:"var(--1px) solid var(--secondary-color)" }}>
            <CarFront className={styles.buttonIcon} />{title}
        </div>
    )
}

export default Button