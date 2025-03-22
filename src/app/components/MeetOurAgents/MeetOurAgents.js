'use client';

import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import styles from './MeetOurAgents.module.css';
import Image from 'next/image';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const agents = [
  {
    name: 'Ronal Son',
    role: 'Sales Staff',
    image: '/team/1.webp',
    socials: ['facebook', 'twitter', 'instagram', 'linkedin']
  },
  {
    name: 'Lanna Sio',
    role: 'Administrative Staff',
    image: '/team/2.webp',
    socials: ['phone', 'mail']
  },
  {
    name: 'Jones Stonie',
    role: 'Manager',
    image: '/team/3.webp',
    socials: ['phone', 'mail']
  },
  {
    name: 'James Rome',
    role: 'Manager',
    image: '/team/3.webp',
    socials: ['phone', 'mail']
  }
];

const socialIcons = {
  facebook: <Facebook className={styles.socialIcon} />,
  twitter: <Twitter className={styles.socialIcon} />,
  instagram: <Instagram className={styles.socialIcon} />,
  linkedin: <Linkedin className={styles.socialIcon} />,
  phone: <Phone className={styles.socialIcon} />,
  mail: <Mail className={styles.socialIcon} />
};

export default function MeetOurAgents() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <section className={styles.agentsSection}>
      <h2 data-aos="fade-up">Meet Our Agents</h2>
      <div className={styles.agentsGrid}>
        {agents.map((agent, index) => (
          <div key={index} className={styles.agentCard} data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
            <div className={styles.imageContainer}>
              <Image
                src={agent.image}
                alt={agent.name}
                width={300}
                height={300}
                priority
            />
            </div>
            <div className={styles.agentInfo}>
              <h4>{agent.name}</h4>
              <span>{agent.role}</span>
              <div className={styles.socialLinks}>
                {agent.socials.map((social, idx) => (
                  <button key={idx} className={styles.socialButton}>
                    {socialIcons[social]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}