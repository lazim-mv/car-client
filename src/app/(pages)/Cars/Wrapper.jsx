"use client"
import React from 'react'
import styles from './CarDetails.module.css'
import CarImages from './Componnets/CarImages'
import CarTabs from './Componnets/CarTabs'
import CarDescription from './Componnets/CarDescription'
import CarOverview from './Componnets/CarOverview'
import LoanComponent from './Componnets/LoanComponent'
import CarLocation from './Componnets/CarLocation'
import DealerInfo from './Componnets/DealerInfo'
 

const Wrapper = ({ carData }) => {
    
    return (
        <div className={styles.wrapper}>
            <div data-aos="fade-up">
                <CarImages carImages={carData.car_images.additionalimages} />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <CarTabs />
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div data-aos="fade-up" data-aos-delay="200"><CarDescription data={carData} /></div>
                    <div data-aos="fade-up" data-aos-delay="300"><CarOverview data={carData} /></div>
                    <div data-aos="fade-up" data-aos-delay="400"><LoanComponent /></div>
                    <div data-aos="fade-up" data-aos-delay="500"><CarLocation /></div>
                </div>
                <div className={styles.right}>
                    <div data-aos="fade-up" data-aos-delay="600"><DealerInfo /></div>
                </div>
            </div>

        </div>
    )
}

export default Wrapper