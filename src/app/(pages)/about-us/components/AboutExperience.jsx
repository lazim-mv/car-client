'use client';

import styles from './About.module.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutExperience = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className={styles.experienceContainer}>
            <div className={styles.experienceImage} data-aos="fade-right">
                <Image
                    src="/aboutus/4.jpg"
                    alt="Our Experience"
                    width={600}
                    height={400}
                    className={styles.image}
                />
            </div>
            <div className={styles.experienceContent} data-aos="fade-left">
                <h2 data-aos="fade-up" data-aos-delay="200">Years of Excellence</h2>
                <p data-aos="fade-up" data-aos-delay="300">With over 15 years in the automotive industry, we&apos;ve built a reputation for excellence and reliability. Our team of experts brings unparalleled knowledge and dedication to every transaction.</p>
                <div className={styles.experienceFeatures}>
                    <div className={styles.featureItem} data-aos="fade-up" data-aos-delay="400">
                        <h4>Professional Team</h4>
                        <p>Our certified experts ensure you receive the best guidance and support.</p>
                    </div>
                    <div className={styles.featureItem} data-aos="fade-up" data-aos-delay="500">
                        <h4>Quality Guarantee</h4>
                        <p>Every vehicle meets our stringent quality standards before sale.</p>
                    </div>
                    <div className={styles.featureItem} data-aos="fade-up" data-aos-delay="600">
                        <h4>Customer Satisfaction</h4>
                        <p>We prioritize your satisfaction with transparent and honest service.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutExperience;