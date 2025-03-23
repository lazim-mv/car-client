"use client"
import React, { useState } from 'react'
import styles from "./styles/CarTabs.module.css"

const CarTabs = ({ activeTab, setActiveTab }) => {
    const [currentTab, setCurrentTab] = useState('cardescription')

    const handleTabClick = (tabId) => {
        setCurrentTab(tabId);
        const element = document.getElementById(tabId);
        if (element) {
            const offset = element.offsetTop - window.innerWidth * 0.05; 
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    }

    const tabs = [
        { id: 'cardescription', label: 'Description' },
        { id: 'caroverview', label: 'Overview' },
        { id: 'carloancalculator', label: 'Loan Calculator' },
        { id: 'carmap', label: 'Map Location' },
    ]

    return (
        <div className={styles.tabsContainer}>
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    className={`${styles.tab} ${currentTab === tab.id ? styles.active : ''}`}
                    onClick={() => handleTabClick(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
}

export default CarTabs