"use client"
import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1 - Logo and Description */}
        <div className={styles.column}>
          <div className={styles.logo}>
            <Image src="/header/LogoBlack.png" alt="Logo" width={150} height={50} />
          </div>
          <p className={styles.description}>
            Your trusted destination for quality used cars. We make buying and selling simple, transparent, and rewarding.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/cars">Cars</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        {/* Column 3 - Contact Info */}
        <div className={styles.column}>
          <h4>Contact Info</h4>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <MapPin className={styles.icon} />
              <p>123 Car Street, Auto City, AC 12345</p>
            </div>
            <div className={styles.contactItem}>
              <Phone className={styles.icon} />
              <p>+1 234 567 8900</p>
            </div>
            <div className={styles.contactItem}>
              <Mail className={styles.icon} />
              <p>info@cartrade.com</p>
            </div>
          </div>
        </div>

        {/* Column 4 - Social Links */}
        <div className={styles.column}>
          <h4>Follow Us</h4>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className={styles.icon} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className={styles.icon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className={styles.icon} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p>© 2024 CarTrade. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer