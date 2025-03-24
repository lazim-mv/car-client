"use client"
import React, { useState, useEffect } from 'react'
import styles from './Section3.module.css'
import Button2 from '../buttons/button2/Button2'
import ImagePreview from '../ImagePreview/ImagePreview'

import CarGrid from './CarGrid'
import { useWindowSize } from '../../utils/windowSize'
import Link from 'next/link'

const Section3 = ({ carData, loading }) => {
  const [activeTab, setActiveTab] = useState('All Cars');
  const [previewImage, setPreviewImage] = useState({ index: null, url: null });
  const [categories, setCategories] = useState([]);
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
    if (carData && carData.length > 0) {
      const allCarsCategory = {
        tabName: "All Cars",
        carData: carData.flatMap(category => category.carData)
      };
      setCategories([allCarsCategory, ...carData]);
    } else {
      // setCategories(defaultData);
    }
  }, [carData]);

  const activeData = categories.length > 0 ? categories : defaultData;
  const sixData = activeData[0].carData.slice(0, 6);

  const filteredCars = sixData.filter(car =>
    activeTab === 'All Cars' ? true : car.category === activeTab
  );


  return (
    <div className={styles.container}>
      <div className={styles.row1} data-aos="fade-up">
        <h2>Newest Listings</h2>
        {!isSmallScreen &&
          <Link href="/cars-filter">
            <Button2 />
          </Link>
        }
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
      {filteredCars && filteredCars?.length === 0 ? <p>No Data</p> : loading ? <p>Loading...</p> :
        <CarGrid filteredCars={filteredCars} />
      }
      {isSmallScreen && (

        <Link href="/cars-filter" className={styles.mobileButton}>
          <Button2 />
        </Link>
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