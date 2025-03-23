"use client"
import React from 'react'
import styles from './styles/DealerInfo.module.css'
import Image from 'next/image'
import { MapPin, Phone, MessageSquare } from 'lucide-react'

const DealerInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dealer}>
        <div className={styles.profile}>
          <Image 
            src="/face.webp" 
            alt="Dealer" 
            width={80} 
            height={80} 
            className={styles.avatar}
          />
          <div className={styles.info}>
            <h3>Ley Alex</h3>
            <span className={styles.badge}>Verified dealer</span>
          </div>
        </div>

        <div className={styles.location}>
          <MapPin className={styles.icon} />
          <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
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

        <div className={styles.actions}>
          <button className={styles.callBtn}>
            <Phone size={18} />
            Call to seller
          </button>
          <button className={styles.chatBtn}>
            <MessageSquare size={18} />
            Chat
          </button>
        </div>
      </div>
    </div>
  )
}

export default DealerInfo