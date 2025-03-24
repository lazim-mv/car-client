'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';
import { usePathname } from 'next/navigation';

const ContactForm = () => {
    const pathname = usePathname();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className={`${styles.container} ${pathname === "contact" ? "containerPage" : ""}`}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h2>Get in Touch</h2>
                    <p>We&apos;d love to hear from you. Please fill out this form.</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={styles.input}
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className={styles.textarea}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Your message"
                            rows="4"
                        />
                    </div>
                    <button type="submit" className={styles.button}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;