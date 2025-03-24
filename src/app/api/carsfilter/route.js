import { NextResponse } from "next/server"
import { supabase } from "../../utils/supabaseClient"

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url)
        const make = searchParams.get('make')
        const model = searchParams.get('model')
        const body = searchParams.get('body')
        const title = searchParams.get('title')


        let query = supabase
            .from('car')
            .select(`
                *,
                car_images!inner (
                    image,
                    additionalimages
                ),
                 car_specifications (
                        mileage,
                        geartype,
                        fueltype
                    ),
                carbrand:brandid(name),
                carmodel:modelid(name),
                carcategory:categoryid(name)
            `)
            .eq('status', 'Available')

        if (make) query = query.eq('brandid', make)
        if (model) query = query.eq('modelid', model)
        if (body) query = query.eq('categoryid', body)
        if (title) query = query.ilike('title', `%${title}%`)

        const { data, error } = await query

        if (error) throw error

        const formattedData = data.map(car => ({
            ...car,
            image: car.car_images.image,
            additionalImages: car.car_images.additionalimages,
            car_images: undefined,
            specifications: {
                mileage: car.car_specifications?.mileage,
                geartype: car.car_specifications?.geartype,
                fueltype: car.car_specifications?.fueltype
            },
        }))

        return NextResponse.json(formattedData)
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}