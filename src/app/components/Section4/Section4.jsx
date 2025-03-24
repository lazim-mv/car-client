"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Section4.module.css";

import { useWindowSize } from "../../utils/windowSize";
import Button2 from "../buttons/button2/Button2";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


const container2Data = [
    {
        img: "/section4/1.webp",
        title: "Best Deals, Best Prices",
        description: "We offer competitive prices for both buyers and sellers, ensuring you get the best value whether you're selling your car or looking for your next ride."
    },
    {
        img: "/section4/2.webp",
        title: "Hassle-Free Buying & Selling",
        description: "Our process is smooth and transparent, with no hidden fees. We handle all paperwork, so you don’t have to worry about a thing."
    },
    {
        img: "/section4/3.webp",
        title: "Wide Selection of Quality Cars",
        description: "From budget-friendly options to premium models, we have a carefully inspected selection of vehicles to meet every need and budget."
    },
    {
        img: "/section4/4.webp",
        title: "Trusted & Reliable Service",
        description: "With years of experience in the industry, we are committed to honesty, reliability, and customer satisfaction at every step."
    },
    {
        img: "/section4/5.webp",
        title: "Instant Offers & Quick Payments",
        description: "Need to sell fast? We provide instant car valuations and quick payments, ensuring you get your money without any delays."
    }
];

const Section4 = () => {
    const cardData = container2Data;
    const { windowSize, isSmallScreen } = useWindowSize();
    const initialVisibleState = Array(cardData.length).fill(false);
    initialVisibleState[0] = true;
    const [answerVisible, setAnswerVisible] = useState(initialVisibleState);

    const handleClick = (index) => {
        setAnswerVisible((prevVisible) => {
            const newVisible = Array(cardData.length).fill(false);
            newVisible[index] = !prevVisible[index];
            return newVisible;
        });
    };

    return (
        <div className={`${styles.container} `} data-aos="fade-up">
            <div className={styles.tittle} >
                <div className={styles.topSection}>
                    <h2  >Why Choose Us</h2>
                </div>

                {!isSmallScreen && <div className={styles.chatButton}>
                    <Link href="/contact">
                        <Button2 title="Chat" />
                    </Link>
                </div>}
            </div>

            <div className={styles.cards} data-aos="fade-up" data-aos-delay="100">
                {cardData.map((data, index) => (
                    <div
                        className={styles.card}
                        key={index}
                        onClick={() => handleClick(index)}
                    >
                        <div className={styles.cardHeading}>
                            <h3>{data.title}</h3>
                            <ArrowUpRight className={styles.arrow} style={{
                                transform: answerVisible[index]
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                                transition: "transform 0.3s ease",
                            }} />

                        </div>
                        <div
                            className={`${styles.descContainer} ${answerVisible[index] ? styles.visible : ""
                                }`}
                            style={{ transition: "all 0.3s ease" }}
                        >
                            <p className={styles.desc}>{data.description}</p>
                        </div>
                        {answerVisible[index] && (
                            <div className={`${styles.serviceImgContainer}`} style={{ transition: "all 0.3s ease" }}>
                                <Image
                                    src={data.img}
                                    width={300}
                                    height={500}
                                    alt="ImageClients"
                                    className={styles.serviceImg}
                                    style={{ transition: "all 0.3s ease" }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {isSmallScreen && <div className={styles.chatButton}>
                <Link href="/contact">
                    <Button2 title="Chat" />
                </Link>
            </div>}
        </div>
    );
};

export default Section4;
