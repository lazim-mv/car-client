'use client'
import React, { useState, useEffect } from 'react'
import styles from './CarsFilter.module.css'
import { ChevronDown, Search } from 'lucide-react'
import useGetCarBrandAndModels from '../../../../hooks/common/useGetCarBrandAndModels'
import { useRouter, useSearchParams } from 'next/navigation'
import useGetCarCategories from '../../../../hooks/common/useGetCarCategories'

const CarsFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { categories } = useGetCarCategories();

    const [searchTitle, setSearchTitle] = useState(searchParams.get('title') || '')
    const { brands, models, selectedBrand, setSelectedBrand } = useGetCarBrandAndModels()
    const [currentModel, setCurrentModel] = useState(searchParams.get('model') || '')
    const [currentBody, setCurrentBody] = useState(searchParams.get('body') || '')

    useEffect(() => {
        setSelectedBrand(searchParams.get('make') || '')
    }, [])

    const handleSearch = () => {
        const params = new URLSearchParams()
        if (selectedBrand) params.set('make', selectedBrand)
        if (currentModel) params.set('model', currentModel)
        if (currentBody) params.set('body', currentBody) 
        if (searchTitle) params.set('title', searchTitle)

        router.push(`/cars-filter?${params.toString()}`)
    }

    // Reset model when brand changes
    useEffect(() => {
        if (selectedBrand) {
            setCurrentModel('')
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
                            value={currentModel}
                            onChange={(e) => setCurrentModel(e.target.value)}
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
                            value={currentBody}
                            onChange={(e) => setCurrentBody(e.target.value)}
                        >
                            <option value="">Select Body</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
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