import { supabase } from "../../utils/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { data: categories, error: categoryError } = await supabase
            .from("carcategory")
            .select("id, name, image, car_ids");

        if (categoryError) throw new Error(`Supabase Error: ${categoryError.message}`);
        if (!categories || categories.length === 0) throw new Error("No categories found");

        // Step 2: Fetch all cars in one query using car_ids
        const allCarIds = categories
            .flatMap((cat) => cat.car_ids) // Collect all car IDs
            .filter((id) => id !== undefined && id !== null);

        let cars = [];
        if (allCarIds.length > 0) {
            const { data: carData, error: carError } = await supabase
                .from("car")
                .select(`
                    carid,
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
                `)
                .in("carid", allCarIds); // Fetch only relevant cars

            if (carError) throw new Error(`Supabase Error: ${carError.message}`);
            cars = carData || [];
        }

        // Step 3: Map cars to their respective categories
        const transformedData = categories.map((category) => ({
            tabId: category.id,
            tabName: category.name,
            tabImage: category.image,
            carData: cars
                .filter((car) => category.car_ids.includes(car.carid)) // Match cars by ID
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

        console.log("Transformed Data:", JSON.stringify(transformedData, null, 2));

        return NextResponse.json(transformedData, { status: 200 });
    } catch (error) {
        console.error("Error fetching cars:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
