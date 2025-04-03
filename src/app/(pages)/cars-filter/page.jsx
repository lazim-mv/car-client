import CarsFilter from "./components/CarsFilter/CarsFilter"
import AllCars from './components/CarsGrid/AllCars'
import Pagination from './components/Pagination/Pagination'

async function getCars(searchParams) {
    try {
        const queryParams = new URLSearchParams({
            ...searchParams,
            page: searchParams?.page || 1,
            limit: 9
        })
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
        const response = await fetch(`${baseUrl}/api/carsfilter?${queryParams}`, {
            next: { 
                revalidate: 1800 
            }
        })

        if (!response.ok) {
            throw new Error('Failed to fetch cars')
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error:', error)
        return {
            cars: [],
            pagination: {
                total: 0,
                page: 1,
                limit: 9,
                totalPages: 1
            }
        }
    }
}

export default async function CarsFilterPage({ searchParams }) {
    const { cars = [], pagination = { page: 1, totalPages: 1 } } = await getCars(searchParams)
    return (
        <div>
            <CarsFilter />
            <AllCars
                cars={cars}
                loading={false}
            />
            <Pagination
                currentPage={pagination?.page || 1}
                totalPages={pagination?.totalPages || 1}
                searchParams={searchParams}
            />
        </div>
    )
}