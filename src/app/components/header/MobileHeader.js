'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from '../Logo/Logo';
import styles from './MobileHeader.module.css';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.mobileHeader}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logoContainer}>
          <Logo width={120} height={40} color="#000000" />
        </Link>
        <button
          onClick={toggleMenu}
          className={styles.menuButton}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
      >
        <nav className={styles.nav}>
          <Link
            href="/"
            className={styles.navLink}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={styles.navLink}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/cars-filter"
            className={styles.navLink}
            onClick={toggleMenu}
          >
            Buy a car
          </Link>
          <Link
            href="/news"
            className={styles.navLink}
            onClick={toggleMenu}
          >
            News
          </Link>
          <Link
            href="/contact"
            className={styles.navLink}
            onClick={toggleMenu}
          >
            Connect with us
          </Link>
        </nav>

        <div className={styles.contactSection}>
          <h3 className={styles.contactTitle}>Contact Us</h3>
          <div className={styles.contactInfo}>
            <p className={styles.contactText}>
              Call us: <br />
              <a href="tel:(808) 555-0111" className={styles.contactLink}>
                (808) 555-0111
              </a>
            </p>
            <p className={styles.contactText}>
              Email: <br />
              <a href="mailto:contact@gmail.com" className={styles.contactLink}>
                contact@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;