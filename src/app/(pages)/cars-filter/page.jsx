import CarsFilter from "./components/CarsFilter/CarsFilter"
import AllCars from './components/CarsGrid/AllCars'
import Pagination from './components/Pagination/Pagination'

async function getCars(searchParams) {
    try {
        const page = searchParams?.page || 1
        const limit = 9
        const queryParams = new URLSearchParams({
            ...searchParams,
            page,
            limit
        })
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
        const response = await fetch(`${baseUrl}/api/carsfilter?${queryParams}`, {
            cache: 'no-store'
        })

        if (!response.ok) {
            throw new Error('Failed to fetch cars')
        }

        const data = await response.json()
        // console.log('API Response:', data) // Debug log
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
    console.log(cars, "cars")
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