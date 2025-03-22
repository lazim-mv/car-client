"use client"
import React, { useEffect } from 'react'
import styles from './Section2.module.css'
import Button2 from '../buttons/button2/Button2'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section2 = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-in-out'
        })
    }, [])

    const data = [
        {
            id: 1,
            image: "/section2/coupe.webp",
            title: "Coupe",
            description: "99 Cars",
        },
        {
            id: 2,
            image: "/section2/mvp.webp",
            title: "mvp",
            description: "99 Cars",
        },
        {
            id: 3,
            image: "/section2/sedan.webp",
            title: "sedan",
            description: "99 Cars",
        },
        {
            id: 4,
            image: "/section2/hatchback.webp",
            title: "hatchback",
            description: "99 Cars",
        },
        {
            id: 5,
            image: "/section2/suv.webp",
            title: "suv",
            description: "99 Cars",
        },
        {
            id: 6,
            image: "/section2/truck.webp",
            title: "truck",
            description: "99 Cars",
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.row1} data-aos="fade-up">
                <h2>Find By Category</h2>
                <div className={styles.buttonContainer}>
                    <Button2 />
                </div>
            </div>
            <div className={styles.row2} data-aos="fade-up" data-aos-delay="100">
                {data.map((data, index) => (
                    <div
                        className={styles.card}
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={`${index * 200}`}
                    >
                        <div className={styles.imageContainer}>
                            <Image
                                width={148}
                                height={58}
                                alt={`${data.title} image`}
                                src={data.image}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h4>{data.title}</h4>
                            <p>{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section2