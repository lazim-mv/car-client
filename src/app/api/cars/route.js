import { supabase } from "../../utils/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Step 1: Fetch all categories
        const { data: categories, error: categoryError } = await supabase
            .from("carcategory")
            .select("id, name, image");

        if (categoryError) throw new Error(`Supabase Error: ${categoryError.message}`);
        if (!categories || categories.length === 0) throw new Error("No categories found");

        // Step 2: Fetch cars with category details in one query
        const { data: cars, error: carError } = await supabase
            .from("car")
            .select(`
                carid,
                title,
                year,
                price,
                categoryid,
                car_specifications (
                    mileage,
                    geartype,
                    fueltype
                ),
                car_images (
                    image,
                    additionalimages
                )
            `);

        if (carError) throw new Error(`Supabase Error: ${carError.message}`);
        if (!cars) throw new Error("No cars found");

        // Step 3: Map cars to their respective categories
        const transformedData = categories.map((category) => ({
            tabId: category.id,
            tabName: category.name,
            tabImage: category.image,
            carData: cars
                .filter((car) => car.categoryid === category.id) // Match cars by category ID
                .map((car) => ({
                    carId: car.carid,
                    category: category.name,
                    name: car.title,
                    year: car.year,
                    price: `${car.price || "N/A"}`,
                    mileage: `${car.car_specifications?.mileage || "N/A"} km`,
                    transmission: car.car_specifications?.geartype || "N/A",
                    fueltype: car.car_specifications?.fueltype || "N/A",
                    image: car.car_images?.image || "/section3/default.webp",
                    additionalImage: car.car_images?.additionalimages || [],
                })),
        }));

        return NextResponse.json(transformedData, { status: 200 });
    } catch (error) {
        console.error("Error fetching cars:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
