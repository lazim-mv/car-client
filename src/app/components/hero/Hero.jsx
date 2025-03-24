
import React from 'react'
import styles from './Hero.module.css'
import MainFilterBar from '../search/MainFilterBar'
import ImageSlide from './ImageSlide'

const Hero = () => {




    return (
        <>

            <div className={styles.container}>
                <ImageSlide />
                <div className={styles.contents}>
                    <h4 data-aos="fade-down">Over 95,000 classified ads listing</h4>
                    <h1 data-aos="fade-up">Let&apos;s find your next <br />drive in your city </h1>
                </div>
                <div className={styles.filterContainer}>
                    <MainFilterBar />
                </div>
            </div>

        </>
    )
}

export default Hero