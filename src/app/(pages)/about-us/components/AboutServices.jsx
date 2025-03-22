'use client';

import styles from './About.module.css';
import { Car, HandshakeIcon, WrenchIcon, Wallet } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutServices = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const services = [
        {
            icon: <Car size={24} />,
            title: 'Wide Selection',
            description: 'Browse through our extensive collection of quality vehicles from trusted brands.'
        },
        {
            icon: <HandshakeIcon size={24} />,
            title: 'Expert Guidance',
            description: 'Our experienced team provides personalized assistance throughout your car buying journey.'
        },
        {
            icon: <WrenchIcon size={24} />,
            title: 'Quality Assurance',
            description: 'Every vehicle undergoes thorough inspection and maintenance before sale.'
        },
        {
            icon: <Wallet size={24} />,
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
                        <div className={styles.serviceIcon}>{service.icon}</div>
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutServices;