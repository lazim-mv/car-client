'use client';

import styles from './News.module.css';
import Image from 'next/image';

const NewsAside = () => {
    return (
        <aside className={styles.sidebar}>
            <h3>Recent Posts</h3>
            <div className={styles.blogList}>
                <div className={styles.blogListItem}>
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
                <div className={styles.blogListItem}>
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