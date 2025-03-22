'use client'
import React, { useState } from 'react'
import styles from './CarsFilter.module.css'
import { ChevronDown, Search } from 'lucide-react'

const CarsFilter = () => {
    const [selectedMake, setSelectedMake] = useState('')
    const [selectedModel, setSelectedModel] = useState('')
    const [selectedBody, setSelectedBody] = useState('')

    return (
        <div className={styles.container}>
            <div className={styles.filterBar}>
                <div className={styles.selectGroup}>
                    <div className={styles.selectWrapper}>
                        <input type="text" placeholder='Enter Location...' className={styles.input} />
                    </div>
                    <div className={styles.selectWrapper}>
                        <select className={styles.select} value={selectedMake} onChange={(e) => setSelectedMake(e.target.value)}>
                            <option value="" disabled>Make</option>
                            <option value="toyota">Toyota</option>
                            <option value="honda">Honda</option>
                            <option value="bmw">BMW</option>
                        </select>
                        <ChevronDown className={styles.selectIcon} />
                    </div>
                    <div className={styles.selectWrapper}>
                        <select className={styles.select} value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
                            <option value="" disabled>Model</option>
                            <option value="camry">Camry</option>
                            <option value="civic">Civic</option>
                            <option value="x5">X5</option>
                        </select>
                        <ChevronDown className={styles.selectIcon} />
                    </div>
                    <div className={styles.selectWrapper}>
                        <select className={styles.select} value={selectedBody} onChange={(e) => setSelectedBody(e.target.value)}>
                            <option value="" disabled>Body</option>
                            <option value="sedan">Sedan</option>
                            <option value="suv">SUV</option>
                            <option value="coupe">Coupe</option>
                        </select>
                        <ChevronDown className={styles.selectIcon} />
                    </div>
                </div>
                <button className={styles.searchButton}>
                    Search
                    <Search className={styles.searchIcon} />
                </button>
            </div>
        </div>
    )
}

export default CarsFilter