'use client'
import { useState, useEffect } from 'react'
import CarsFilter from "./components/CarsFilter/CarsFilter"
import AllCars from './components/CarsGrid/AllCars'

const CarsFilterPage = () => {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)
    const [filters, setFilters] = useState({
        make: '',
        model: '',
        body: ''
    })

    const fetchCars = async (filterParams = {}) => {
        try {
            setLoading(true)
            const queryParams = new URLSearchParams(filterParams)
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
            const response = await fetch(`${baseUrl}/api/carsfilter?${queryParams}`)
            
            if (!response.ok) {
                throw new Error('Failed to fetch cars')
            }

            const data = await response.json()
            setCars(data)
        } catch (error) {
            console.error('Error:', error)
            setCars([])
        } finally {
            setLoading(false)
        }
    }

    const handleFilterChange = (newFilters) => {
        setFilters(prev => ({
            ...prev,
            ...newFilters
        }))
    }

    useEffect(() => {
        fetchCars(filters)
    }, [filters])

    return (
        <div>
            <CarsFilter 
                filters={filters} 
                onFilterChange={handleFilterChange}
            />
            <AllCars 
                cars={cars} 
                loading={loading}
            />
        </div>
    )
}

export default CarsFilterPage