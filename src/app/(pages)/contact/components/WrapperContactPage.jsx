import React from 'react'
import styles from '../Contact.module.css'
import ContactMap from './ContactMap/ContactMap'
import ContactForm from '../../../components/ContactForm/ContactForm'

const WrapperContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.formSection}>
                    <ContactForm />
                </div>
                <div className={styles.mapSection}>
                    <ContactMap />
                </div>
            </div>
        </div>
    )
}

export default WrapperContactPage