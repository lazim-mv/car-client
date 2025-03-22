"use client"
import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import Image from 'next/image';

const ImageSlide = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '/carsWall/1.webp',
        '/carsWall/2.webp',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className={styles.imageContainer}>
            {images.map((src, index) => (
                <Image
                    key={src}
                    width={500}
                    height={500}
                    src={src}
                    alt={`hero-${index + 1}`}
                    className={`${styles.sliderImage} ${index === currentImageIndex ? styles.active : ''}`}
                />
            ))}
        </div>
    )
}

export default ImageSlide