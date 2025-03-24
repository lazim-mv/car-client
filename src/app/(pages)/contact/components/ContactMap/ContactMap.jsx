'use client';

import React from 'react';
import styles from './ContactMap.module.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactMap = () => {
    const contactInfo = {
        address: '123 Car Dealership Street, City, Country',
        phone: '+1 234 567 8900',
        email: 'info@cardealership.com',
        hours: [
            'Monday - Friday: 9:00 AM - 6:00 PM',
            'Saturday: 10:00 AM - 4:00 PM',
            'Sunday: Closed'
        ]
    };

    return (
        <div className={styles.container}>
            <div className={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.infoItem}>
                    <MapPin className={styles.icon} />
                    <div>
                        <h4>Address</h4>
                        <p>{contactInfo.address}</p>
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <Phone className={styles.icon} />
                    <div>
                        <h4>Phone</h4>
                        <p>{contactInfo.phone}</p>
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <Mail className={styles.icon} />
                    <div>
                        <h4>Email</h4>
                        <p>{contactInfo.email}</p>
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <Clock className={styles.icon} />
                    <div>
                        <h4>Business Hours</h4>
                        {contactInfo.hours.map((hour, index) => (
                            <p key={index}>{hour}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMap;