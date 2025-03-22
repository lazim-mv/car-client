'use client';

import styles from './News.module.css';
import Image from 'next/image';

const NewsHero = () => {
    return (
        <article className={styles.blogPost}>
            <h1>Latest News</h1>
            <div className={styles.blogContent}>
                <Image
                    src="/carsWall/4.jpeg"
                    alt="Blog Post"
                    width={800}
                    height={400}
                    className={styles.featuredImage}
                    priority
                />
                <h2>Sample Blog Post Title</h2>
                <div className={styles.metadata}>
                    <span>Posted on: January 1, 2024</span>
                    <span>By: John Doe</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </article>
    );
};

export default NewsHero;