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
    console.log(carData, "carData")
    return (
        <div className={styles.wrapper}>
            <CarImages carImages={carData.car_images.additionalimages} />
            <CarTabs />
            <div className={styles.container}>
                <div className={styles.left}>
                    <CarDescription data={carData} />
                    <CarOverview data={carData} />
                    <LoanComponent />
                    <CarLocation />
                </div>
                <div className={styles.right}>
                    <DealerInfo />
                </div>
            </div>

        </div>
    )
}

export default Wrapper