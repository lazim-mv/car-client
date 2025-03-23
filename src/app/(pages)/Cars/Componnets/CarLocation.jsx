"use client"
import React from 'react'
import styles from './styles/CarLocation.module.css'
import { MapPin } from 'lucide-react'

const CarLocation = () => {
    return (
        <div className={styles.container} id='carmap'>
            <h2>Location</h2>
            <div className={styles.address}>
                <MapPin className={styles.icon} />
                <p>4255 Northwest 156th Street, United States</p>
            </div>
            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.77147853095!2d-80.19179034999999!3d25.7741728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6c8d8a94923%3A0x6e5c9d4f4dc5401c!2sMiami%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1635789725576!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}

export default CarLocation