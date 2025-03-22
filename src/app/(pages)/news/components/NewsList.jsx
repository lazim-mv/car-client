'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './NewsList.module.css';
import Link from 'next/link';
import Image from 'next/image';

const dummyPosts = [
    {
        title: "New BMW M3 Competition Unveiled",
        slug: "new-bmw-m3-competition-unveiled",
        date: "2024-01-15",
        author: "John Smith",
        excerpt: "BMW reveals the latest M3 Competition model with enhanced performance features and striking design updates.",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738"
    },
    {
        title: "Electric Vehicle Sales Hit Record High",
        slug: "electric-vehicle-sales-record",
        date: "2024-01-12",
        author: "Sarah Johnson",
        excerpt: "Global electric vehicle sales surpass expectations, marking a significant shift in consumer preferences.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7"
    },
    {
        title: "Revolutionary Hydrogen Fuel Cell Technology",
        slug: "hydrogen-fuel-cell-technology",
        date: "2024-01-10",
        author: "Michael Chen",
        excerpt: "New breakthrough in hydrogen fuel cell technology promises to revolutionize the automotive industry.",
        image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d"
    }
];

const NewsList = ({ posts = dummyPosts, title }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);
    return (
        <div className={styles.container}>
            {title &&
                <h2 data-aos="fade-up">{title}</h2>
            }
            <div className={styles.cards}>
            {posts.map((post, index) => (
                <Link href={`/news/${post.slug}`} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                    <article className={styles.newsCard}>
                        <Image width={485} height={365} src={post.image} alt={post.title} className={styles.newsImage} />
                        <div className={styles.newsContent}>
                            <h3>{post.title}</h3>
                            <div className={styles.metadata}>
                                <span>{post.date}</span>
                                <span>{post.author}</span>
                            </div>
                            <p>{post.excerpt}</p>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
        </div>
    );
};

export default NewsList;