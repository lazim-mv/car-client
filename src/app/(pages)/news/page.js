'use client';

import styles from './components/News.module.css';
import NewsHero from './components/NewsHero';
import NewsAside from './components/NewsAside';
import NewsList from './components/NewsList';

const NewsPage = () => {
    return (
        <main className={styles.container}>
            <div className={styles.mainContent}>
                <NewsHero />
            </div>
            <NewsAside />
            {/* <NewsList /> */}
        </main>
    );
};

export default NewsPage;