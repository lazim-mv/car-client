import React from 'react'
import styles from './Button.module.css'
import { ArrowRight } from 'lucide-react'
const Button2 = ({ title = "View All", icon = true }) => {
    return (
        <div className={styles.container}>{title} {icon && <ArrowRight className={styles.icon} />}</div>
    )
}

export default Button2