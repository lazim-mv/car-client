'use client';

import styles from './About.module.css';
import Image from 'next/image';

const AboutMission = () => {


    return (
        <div className={styles.missionContainer}>
            <div className={styles.missionContent} >
                <h2 data-aos="fade-up" data-aos-delay="50">Our Mission</h2>
                <p data-aos="fade-up" data-aos-delay="100" data-aos-offset="50">At CarReseller, we are dedicated to transforming the car buying experience by making it more seamless, transparent, and customer-focused. Our mission is to eliminate the complexities of vehicle transactions, ensuring that every buyer enjoys a smooth, hassle-free process from start to finish.</p>
                <br />
                <p data-aos="fade-up" data-aos-delay="150" data-aos-offset="50">We believe that purchasing a vehicle should be an exciting and stress-free journey, not a daunting task filled with hidden fees or uncertainty. That&apos;s why we prioritize transparency in pricing, detailed vehicle insights, and a customer-centric approach that helps you make informed decisions with confidence.</p>
                <br />
                <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="50">Whether you&apos;re searching for a budget-friendly option, a family car, or a high-performance vehicle, CarReseller provides a curated selection tailored to your needs. Our platform connects buyers with trusted sellers, offering secure transactions and personalized assistance every step of the way.</p>
                <div className={styles.missionStats}>
                    <div className={styles.statItem} data-aos="fade-up" data-aos-delay="100" data-aos-offset="50">
                        <h3>10K+</h3>
                        <span>Cars Sold</span>
                    </div>
                    <div className={styles.statItem} data-aos="fade-up" data-aos-delay="150" data-aos-offset="50">
                        <h3>5K+</h3>
                        <span>Happy Customers</span>
                    </div>
                    <div className={styles.statItem} data-aos="fade-up" data-aos-delay="200" data-aos-offset="50">
                        <h3>15+</h3>
                        <span>Years Experience</span>
                    </div>
                </div>
            </div>
            <div className={styles.missionImage} data-aos="fade-down" data-aos-delay="50">
                <Image
                    src="/aboutus/2.jpg"
                    alt="Our Mission"
                    width={600}
                    height={400}
                    className={styles.image}
                />
            </div>
        </div>
    );
};

export default AboutMission;