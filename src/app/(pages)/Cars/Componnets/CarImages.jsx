import React, { useState } from 'react'
import styles from "./styles/CarImage.module.css"
import Image from 'next/image';

const CarImages = ({carImages}) => {

    const [current, setCurrent] = useState(0);

    const data = {
        category: "Crossover",
        name: "BMW i7 2022",
        year: "2022",
        price: "$60,109",
        fueltype: "Petrol",
        transmission: "Automatic",
        mileage: "2204 km",
        image: "/section3/1.webp",
        Images: [
            "/section3/1.webp",
            "/section3/2.webp",
            "/section3/3.webp",
            "/section3/4.webp",
            "/section3/1.webp",
            "/section3/2.webp",
        ]
    };

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                {carImages.map((data, index) => (
                    <div className={`${styles.card} ${index === current ? styles.activeCard : ""}`}
                        onClick={() => setCurrent(index)}
                        key={index}
                        style={{ transition: "all 0.3s ease" }}
                    >
                        <Image src={data} alt="image" width={300} height={200} className={styles.carImage} quality={100}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarImages