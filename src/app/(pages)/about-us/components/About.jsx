'use client';

import styles from './About.module.css';
import AboutMission from './AboutMission';
import AboutServices from './AboutServices';
import AboutExperience from './AboutExperience';

const About = () => {
    return (
        <section className={styles.aboutContainer}>
            <AboutMission />
            <AboutServices />
            <AboutExperience />
        </section>
    );
};

export default About;