export async function getCarById(id) {
    if (!id) throw new Error("Car ID is required");
  
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const url = `${baseUrl}/api/cars/${id}`;
  
    try {
      const res = await fetch(url, { cache: "no-store" }); // Disable caching for fresh data
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    } catch (error) {
      throw new Error("Failed to fetch car data: " + error.message);
    }
  }
  