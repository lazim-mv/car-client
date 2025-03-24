// Remove 'use client' since we're making it a server component
import NewsList from "./(pages)/news/components/NewsList";
import AboutUs from "./components/AboutUs/AboutUs";
import Hero from "./components/hero/Hero";
import LoanCalculator from "./components/LoanCalculator/LoanCalculator";
import MeetOurAgents from "./components/MeetOurAgents/MeetOurAgents";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import ContactForm from "./components/ContactForm/ContactForm";

// Make the component async to fetch data server-side
async function getCars() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
    const res = await fetch(`${baseUrl}/api/cars`, {
      cache: 'no-store'
    });
    if (!res.ok) throw new Error("Failed to fetch cars");
    return res.json();
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
}

export default async function Home() {
  const carData = await getCars();

  return (
    <div>
      <Hero />
      <AboutUs />
      <Section2 categoryData={carData} loading={false} />
      <Section4 />
      <Section3 carData={carData} loading={false} />
      <LoanCalculator />
      <MeetOurAgents />
      <NewsList title="Auto Trends & Future" />
      <ContactForm />
    </div>
  );
}