'use client';

import styles from './News.module.css';
import Image from 'next/image';

const NewsAside = () => {
    return (
        <aside className={styles.sidebar} data-aos="fade-up">
            <h3 data-aos="fade-up" data-aos-delay="50">Recent Posts</h3>
            <div className={styles.blogList} data-aos="fade-up" data-aos-delay="100">
                <div className={styles.blogListItem} data-aos="fade-up" data-aos-delay="150">
                    <Image
                        src="/carsWall/1.jpeg"
                        alt="Blog Thumbnail"
                        width={200}
                        height={120}
                        priority
                    />
                    <div className={styles.blogListItemContent}>
                        <h4>First Blog Post</h4>
                        <span>January 1, 2024</span>
                    </div>
                </div>
                <div className={styles.blogListItem} data-aos="fade-up" data-aos-delay="200">
                    <Image
                        src="/carsWall/2.jpeg"
                        alt="Blog Thumbnail"
                        width={200}
                        height={120}
                        priority
                    />
                    <div className={styles.blogListItemContent}>
                        <h4>Second Blog Post</h4>
                        <span>January 2, 2024</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default NewsAside;