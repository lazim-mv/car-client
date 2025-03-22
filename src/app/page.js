"use client"

import { useEffect, useState } from "react";
import NewsList from "./(pages)/news/components/NewsList";
import AboutUs from "./components/AboutUs/AboutUs";
import Hero from "./components/hero/Hero";
import LoanCalculator from "./components/LoanCalculator/LoanCalculator";
import MeetOurAgents from "./components/MeetOurAgents/MeetOurAgents";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";




export default function Home() {

  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("/api/cars", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch cars");
        const data = await res.json();
        setCarData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);
  return (
    <div>
      <Hero />
      <AboutUs />
      <Section2 />
      <Section4 />
      <Section3 carData={carData} loading={loading} />
      <LoanCalculator />
      <MeetOurAgents />
      <NewsList title="Industry Trends & Future of Automobiless" />

    </div>
  );
}
