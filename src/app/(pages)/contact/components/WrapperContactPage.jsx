import React from 'react'
import styles from '../Contact.module.css'
import ContactMap from './ContactMap/ContactMap'
import ContactForm from '../../../components/ContactForm/ContactForm'

const WrapperContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.formSection} data-aos="fade-up">
                    <ContactForm />
                </div>
                <div className={styles.mapSection} data-aos="fade-up" data-aos-delay="50">
                    <ContactMap />
                </div>
            </div>
        </div>
    )
}

export default WrapperContactPage