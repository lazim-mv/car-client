import { supabase } from "@/app/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Fetch categories along with associated cars, specifications, and images
        const { data, error } = await supabase
            .from("carcategory")
            .select(`
                name,
                cars:car (
                    title,
                    year,
                    price,
                    car_specifications (
                        mileage,
                        geartype,
                        fueltype
                    ),
                    car_images (
                        image,
                        additionalimages
                    )
                )
            `);

        if (error) throw new Error(error.message);

        // Transform data to desired structure
        const transformedData = data.map(category => ({
            tabName: category.name,
            carData: category.cars.map(car => ({
                category: category.name,
                name: car.title,
                year: car.year,
                price: `$${car.price}`,
                mileage: `${car.car_specifications?.mileage || "N/A"} km`,
                transmission: car.car_specifications?.geartype || "N/A",
                fueltype: car.car_specifications?.fueltype || "N/A",
                image: car.car_images?.image || "/section3/default.webp",
                additionalImage: car.car_images?.additionalimages?.[0] || null
            }))
        }));

        return NextResponse.json(transformedData, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
