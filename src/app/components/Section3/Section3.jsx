"use client"
import React, { useState, useEffect } from 'react'
import styles from './Section3.module.css'
import Button2 from '../buttons/button2/Button2'
import ImagePreview from '../ImagePreview/ImagePreview'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CarGrid from './CarGrid'
import { useWindowSize } from '../../utils/windowSize'

const Section3 = () => {
  const [activeTab, setActiveTab] = useState('All Cars');
  const [previewImage, setPreviewImage] = useState({ index: null, url: null });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { windowSize, isSmallScreen } = useWindowSize();

  const defaultData = [
    {
      tabName: "All Cars",
      carData: [
        {
          category: "Crossover",
          name: "BMW i7 2022",
          year: "2022",
          price: "$60,109",
          fueltype: "Petrol",
          transmission: "Automatic",
          mileage: "2204 km",
          image: "/section3/1.webp"
        },
        {
          category: "Crossover",
          name: "Ford Territory Titanium X",
          year: "2022",
          price: "$115,920",
          fueltype: "Petrol",
          transmission: "Automatic",
          mileage: "2251 km",
          image: "/section3/2.webp"
        },
        {
          category: "SUV",
          name: "Kia Carnival MPV",
          year: "2022",
          price: "$48,750",
          fueltype: "Petrol",
          transmission: "Automatic",
          mileage: "7323 km",
          image: "/section3/3.webp"
        },
        {
          category: "Hatchback",
          name: "Kia Carnival MPV",
          year: "2022",
          price: "$48,750",
          fueltype: "Petrol",
          transmission: "Automatic",
          mileage: "7323 km",
          image: "/section3/3.webp"
        }
      ]
    },
    { tabName: "Crossover", carData: [] },
    { tabName: "Hatchback", carData: [] },
    { tabName: "Minivan", carData: [] },
    { tabName: "Sedan", carData: [] },
    { tabName: "SUV", carData: [] }
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out'
    });

    const fetchCarData = async () => {
      try {
        const response = await fetch('/api/cars');
        const data = await response.json();
        if (data && data.length > 0) {
          const allCarsCategory = {
            tabName: "All Cars",
            carData: data.flatMap(category => category.carData)
          };
          setCategories([allCarsCategory, ...data]);
        } else {
          setCategories(defaultData);
        }
      } catch (error) {
        console.error('Error fetching car data:', error);
        setCategories(defaultData);
      } finally {
        setLoading(false);
      }
    };

    fetchCarData();
  }, []);

  const activeData = categories.length > 0 ? categories : defaultData;
  const sixData = activeData[0].carData.slice(0, 4);

  const filteredCars = sixData.filter(car =>
    activeTab === 'All Cars' ? true : car.category === activeTab
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.row1} data-aos="fade-up">
        <h2>Newest Listings</h2>
        {!isSmallScreen && <Button2 />}
      </div>
      <div className={styles.tabs} data-aos="fade-up" data-aos-delay="100">
        {activeData.map((tab) => (
          <div
            key={tab.tabName}
            className={`${styles.tab} ${activeTab === tab.tabName ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.tabName)}
          >
            {tab.tabName}
          </div>
        ))}
      </div>
      <div className={styles.row2}>
        <CarGrid filteredCars={filteredCars} />
      </div>
      {isSmallScreen && (
        <div className={styles.mobileButton}>
          <Button2 />
        </div>
      )}
      {previewImage.url && (
        <ImagePreview
          imageUrl={previewImage.url}
          images={filteredCars.map(car => car.image)}
          currentIndex={previewImage.index}
          onClose={(newIndex) => {
            if (newIndex === null) {
              setPreviewImage({ index: null, url: null });
            } else {
              setPreviewImage({
                index: newIndex,
                url: filteredCars[newIndex].image
              });
            }
          }}
        />
      )}
    </div>
  );
};

export default Section3;