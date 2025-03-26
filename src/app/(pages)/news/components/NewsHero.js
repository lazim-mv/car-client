'use client';

import styles from './News.module.css';
import Image from 'next/image';

const NewsHero = () => {
    return (
        <article className={styles.blogPost} data-aos="fade-up">
            <h1 data-aos="fade-up" data-aos-delay="50">Latest News</h1>
            <div className={styles.blogContent} data-aos="fade-up" data-aos-delay="100">
                <Image
                    src="/carsWall/4.jpeg"
                    alt="Blog Post"
                    width={800}
                    height={400}
                    className={styles.featuredImage}
                    priority
                />
                <h2 data-aos="fade-up" data-aos-delay="150">Sample Blog Post Title</h2>
                <div className={styles.metadata} data-aos="fade-up" data-aos-delay="200">
                    <span>Posted on: January 1, 2024</span>
                    <span>By: John Doe</span>
                </div>
                <p data-aos="fade-up" data-aos-delay="250">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </article>
    );
};

export default NewsHero;