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

    const updateSearch = (updates) => {
        const params = new URLSearchParams(searchParams.toString())

        // Update parameters based on the provided updates object
        Object.entries(updates).forEach(([key, value]) => {
            if (value) params.set(key, value)
            else params.delete(key)
        })

        params.set('page', '1')
        router.push(`/cars-filter?${params.toString()}`)
    }

    // Handle dropdown changes with immediate search
    const handleSelectChange = (type, value) => {
        switch (type) {
            case 'brand':
                setSelectedBrand(value)
                setCurrentModel('')
                updateSearch({ make: value, model: '' })
                break
            case 'model':
                setCurrentModel(value)
                updateSearch({ model: value })
                break
            case 'body':
                setCurrentBody(value)
                updateSearch({ body: value })
                break
        }
    }

    const handleTitleSearch = (value) => {
        setSearchTitle(value)
        updateSearch({ title: value.trim() })
    }

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
                            onChange={(e) => handleTitleSearch(e.target.value)}
                        />
                    </div>
                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.select}
                            value={selectedBrand || ''}
                            onChange={(e) => handleSelectChange('brand', e.target.value)}
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
                            onChange={(e) => handleSelectChange('model', e.target.value)}
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
                            onChange={(e) => handleSelectChange('body', e.target.value)}
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
            </div>
        </div>
    )
}

export default CarsFilter