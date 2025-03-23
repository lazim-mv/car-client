import { supabase } from "../../../utils/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;


    if (!id) {
        return NextResponse.json({ error: "Car ID is missing" }, { status: 400 });
    }

    try {
        const { data, error } = await supabase
            .from("car")
            .select(`
        *,
        car_images(*),
        car_ownership(*),
        car_financial_details(*),
        car_service_history(*),
        car_specifications(*),
        dealer:dealerid(*),
        carbrand:brandid(*),
        carcategory:categoryid(*),
        carmodel:modelid(*)
      `)
            .eq("carid", id)
            .single();

        // console.log("Supabase Response:", { data, error });

        if (error) {
            throw new Error(error.message);
        }

        if (!data) {
            return NextResponse.json({ error: "Car not found" }, { status: 404 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("API Error:", error); // ✅ Log the caught error
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
