'use client'
import React, { useState, useEffect } from 'react'
import styles from './CarsFilter.module.css'
import { ChevronDown, Search } from 'lucide-react'
import useGetCarBrandAndModels from '../../../../hooks/common/useGetCarBrandAndModels'

const CarsFilter = ({ filters, onFilterChange }) => {
    const [searchTitle, setSearchTitle] = useState('')
    const { brands, models, selectedBrand, setSelectedBrand } = useGetCarBrandAndModels()

    const handleSearch = () => {
        onFilterChange({
            make: selectedBrand,
            model: filters.model,
            body: filters.body,
            title: searchTitle
        })
    }

    // Update models when brand changes
    useEffect(() => {
        if (selectedBrand !== filters.make) {
            onFilterChange({
                make: selectedBrand,
                model: '' // Reset model when brand changes
            })
        }
    }, [selectedBrand])

    return (
        <div className={styles.container}>
            <div className={styles.filterBar}>
                <div className={styles.selectGroup}>
                    <div className={styles.selectWrapper}>
                        <input 
                            type="text" 
                            placeholder='Search by name...' 
                            className={styles.input}
                            value={searchTitle}
                            onChange={(e) => setSearchTitle(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        />
                    </div>
                    <div className={styles.selectWrapper}>
                        <select 
                            className={styles.select} 
                            value={selectedBrand || ''} 
                            onChange={(e) => setSelectedBrand(e.target.value)}
                        >
                            <option value="">Select Make</option>
                            {brands.map(brand => (
                                <option key={brand.id} value={brand.id}>
                                    {brand.name}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className={styles.selectIcon} />
                    </div>
                    <div className={styles.selectWrapper}>
                        <select 
                            className={styles.select} 
                            value={filters.model || ''} 
                            onChange={(e) => onFilterChange({ model: e.target.value })}
                        >
                            <option value="">Select Model</option>
                            {models.map(model => (
                                <option key={model.id} value={model.id}>
                                    {model.name}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className={styles.selectIcon} />
                    </div>
                    <div className={styles.selectWrapper}>
                        <select 
                            className={styles.select} 
                            value={filters.body || ''} 
                            onChange={(e) => onFilterChange({ body: e.target.value })}
                        >
                            <option value="">Select Body</option>
                            <option value="sedan">Sedan</option>
                            <option value="suv">SUV</option>
                            <option value="coupe">Coupe</option>
                        </select>
                        <ChevronDown className={styles.selectIcon} />
                    </div>
                </div>
                <button className={styles.searchButton} onClick={handleSearch}>
                    Search
                    <Search className={styles.searchIcon} />
                </button>
            </div>
        </div>
    )
}

export default CarsFilter