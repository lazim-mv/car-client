'use client';

import styles from './About.module.css';
import { Car, HandshakeIcon, WrenchIcon, Wallet } from 'lucide-react';

const AboutServices = () => {
 

    const services = [
        {
            icon: <Car className={styles.serviceIcon} />,
            title: 'Wide Selection',
            description: 'Browse through our extensive collection of quality vehicles from trusted brands.'
        },
        {
            icon: <HandshakeIcon className={styles.serviceIcon} />,
            title: 'Expert Guidance',
            description: 'Our experienced team provides personalized assistance throughout your car buying journey.'
        },
        {
            icon: <WrenchIcon className={styles.serviceIcon} />,
            title: 'Quality Assurance',
            description: 'Every vehicle undergoes thorough inspection and maintenance before sale.'
        },
        {
            icon: <Wallet className={styles.serviceIcon} />,
            title: 'Flexible Financing',
            description: 'We offer competitive financing options to suit your budget and requirements.'
        }
    ];

    return (
        <div className={styles.servicesContainer}>
            <h2 data-aos="fade-up">Our Services</h2>
            <p className={styles.servicesDescription} data-aos="fade-up" data-aos-delay="200">We provide comprehensive car buying solutions tailored to your needs</p>
            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceCard} data-aos="fade-up" data-aos-delay={300 + (index * 100)}>
                        <div className={styles.serviceIconContainer}>{service.icon}</div>
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutServices;