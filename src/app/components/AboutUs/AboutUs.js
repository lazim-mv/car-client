"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './aboutUs.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent} data-aos="fade-right">
          <h2>About Us</h2>
          <p className={styles.description}>
            At CarTrade Hub, we make buying and selling used cars simple, fast, and profitable. 
            With a commitment to transparency and customer satisfaction, we help sellers get the 
            best value for their vehicles and buyers find high-quality, well-maintained cars at great prices.
          </p>
          <p className={styles.mission}>
            Our team of experts ensures a smooth, hassle-free experience with fair pricing, 
            instant offers, and reliable service. Whether you&apos;re looking to sell your car quickly 
            or purchase your next ride, we&apos;re here to make the process effortless and rewarding.
          </p>
          <p className={styles.trust}>
            Your trust drives us forward!
          </p>
        </div>
        <div className={styles.imageWrapper} data-aos="fade-left">
          <Image
            src="/aboutus/1.jpg"
            alt="About Us"
            width={600}
            height={400}
            className={styles.aboutImage}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;