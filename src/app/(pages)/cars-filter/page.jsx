import { supabase } from "../../utils/supabaseClient"
import CarsFilter from "./components/CarsFilter/CarsFilter"
import AllCars from './components/CarsGrid/AllCars'

async function getCars(searchParams) {
    try {
        console.log('Search Params:', searchParams) // Debug log

        const query = supabase
            .from('car')
            .select(`
                *,
                car_images!inner (*),
                car_specifications (
                    mileage,
                    geartype,
                    fueltype
                ),
                carbrand:brandid(name),
                carmodel:modelid(name),
                carcategory:categoryid(*)
            `)
            .eq('status', 'Available')

        // 🔍 Filter based on category ID from searchParams
        if (searchParams?.body) {
            query.contains('carcategory.car_ids', [parseInt(searchParams.body)]) 
        }
        if (searchParams?.make) {
            query.eq('brandid', parseInt(searchParams.make))
        }
        if (searchParams?.model) {
            query.eq('modelid', parseInt(searchParams.model))
        }
        if (searchParams?.title) {
            query.ilike('title', `%${searchParams.title}%`)
        }

        const { data, error } = await query
        console.log('Query Result:', data, error) // Debug log

        if (error) throw error
        return data
    } catch (error) {
        console.error('Error:', error)
        return []
    }
}

// 🚀 Server Component
export default async function CarsFilterPage({ searchParams }) {
    const cars = await getCars(searchParams) // Server-side fetch
    console.log(cars, "carsPageData")

    return (
        <div>
            <CarsFilter />
            <AllCars
                cars={cars}
                loading={false}
            />
        </div>
    )
}
