import { supabase } from "../../utils/supabaseClient";
import { useState, useEffect } from "react";

const useGetCarBrandAndModels = () => {
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch all car brands
    useEffect(() => {
        const fetchBrands = async () => {
            setLoading(true);
            setError(null);
            const { data, error } = await supabase.from("carbrand").select("*");
            if (error) {
                setError(error.message);
            } else {
                setBrands(data);
            }
            setLoading(false);
        };
        fetchBrands();
    }, []);

    // Fetch models based on selected brand
    useEffect(() => {
        if (!selectedBrand) return;
        const fetchModels = async () => {
            setLoading(true);
            setError(null);
            const { data, error } = await supabase
                .from("carmodel")
                .select("*")
                .eq("brandid", selectedBrand);
            if (error) {
                setError(error.message);
            } else {
                setModels(data);
            }
            setLoading(false);
        };
        fetchModels();
    }, [selectedBrand]);

    return {
        brands,
        models,
        selectedBrand,
        setSelectedBrand,
        setBrands,
        setModels,
        loading,
        error,
    };
};

export default useGetCarBrandAndModels;
