import { supabase } from "../../utils/supabaseClient"
import { NextResponse } from 'next/server'

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url)
        const page = parseInt(searchParams.get('page')) || 1
        const limit = parseInt(searchParams.get('limit')) || 9
        const start = (page - 1) * limit

        // Get total count
        const { count } = await supabase
            .from('car')
            .select('*', { count: 'exact' })
            .eq('status', 'Available')

        // Main query with pagination
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
            .range(start, start + limit - 1)

        if (searchParams.get('body')) {
            query.eq('categoryid', parseInt(searchParams.get('body')))
        }
        if (searchParams.get('make')) {
            query.eq('brandid', parseInt(searchParams.get('make')))
        }
        if (searchParams.get('model')) {
            query.eq('modelid', parseInt(searchParams.get('model')))
        }
        if (searchParams.get('title')) {
            query.ilike('title', `%${searchParams.get('title')}%`)
        }

        const { data, error } = await query

        if (error) throw error

        return NextResponse.json({
            cars: data || [],
            pagination: {
                total: count,
                page,
                limit,
                totalPages: Math.ceil(count / limit)
            }
        })
    } catch (error) {
        console.error('Error:', error)
        return NextResponse.json({
            cars: [],
            pagination: {
                total: 0,
                page: 1,
                limit: 9,
                totalPages: 1
            }
        }, { status: 500 })
    }
}