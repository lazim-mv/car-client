"use client"
import React from 'react'
import styles from './Section2.module.css'
import Button2 from '../buttons/button2/Button2'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Section2 = ({ categoryData, loading }) => {
    const router = useRouter();

    const datas = [
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


    const handleCardClick = (category) => {
        // Convert category name to match the filter format
        const categoryName = (category?.tabName || category?.title || '').toLowerCase();
        router.push(`/cars-filter?body=${categoryName}`);
    };

    const displayData = (!categoryData || !Array.isArray(categoryData) || categoryData.length === 0) ? datas : categoryData;

    return (
        <div className={styles.container}>
            <div className={styles.row1} data-aos="fade-up">
                <h2>Find By Category</h2>
                <div className={styles.buttonContainer}>
                    <Button2 />
                </div>
            </div>
            {loading && <p>Loading...</p>}
            <div className={styles.row2} data-aos="fade-up" data-aos-delay="100">
                {displayData.map((data, index) => (
                    <div
                        className={styles.card}
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={`${index * 200}`}
                        onClick={() => handleCardClick(data)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className={styles.imageContainer}>
                            <Image
                                width={148}
                                height={58}
                                alt={`${data.title || data.tabName} image`}
                                src={data?.tabImage || data?.image || "/section2/sedan.webp"}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h4>{data?.tabName || data?.title}</h4>
                            <p>{data?.carData?.length || data?.description || 0}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section2