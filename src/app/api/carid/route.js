import { supabase } from "@/app/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    console.log("Fetching car with ID:", id);

    const { data, error } = await supabase
      .from("car")
      .select(`
        *,
        car_specifications (*),
        car_images (*),
        dealer:dealer_id (*)
      `)
      .eq("carid", id)
      .single();

    if (error) {
      console.log("Supabase error:", error);
      throw new Error(error.message);
    }

    if (!data) {
      return NextResponse.json({ error: "Car not found" }, { status: 404 });
    }

    const transformedData = {
      id: data.id,
      title: data.title,
      description: data.description,
      year: data.year,
      price: data.price,
      specifications: {
        condition: data.car_specifications?.condition || "N/A",
        mileage: data.car_specifications?.mileage || "N/A",
        transmission: data.car_specifications?.geartype || "N/A",
        fuelType: data.car_specifications?.fueltype || "N/A",
        engineSize: data.car_specifications?.enginesize || "N/A",
        doors: data.car_specifications?.doors || "N/A",
        color: data.car_specifications?.color || "N/A",
        driveType: data.car_specifications?.drivetype || "N/A",
        cylinders: data.car_specifications?.cylinders || "N/A",
        seats: data.car_specifications?.seats || "N/A",
      },
      images: {
        main: data.car_images?.image || "/default.webp",
        additional: data.car_images?.additionalimages || [],
      },
      dealer: {
        name: data.dealer?.name || "N/A",
        image: data.dealer?.image || "/default-dealer.webp",
        address: data.dealer?.address || "N/A",
        phone: data.dealer?.phone || "N/A",
        isVerified: data.dealer?.is_verified || false,
      },
    };

    return NextResponse.json(transformedData);
  } catch (error) {
    console.log("API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
