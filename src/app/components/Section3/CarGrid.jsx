"use client"
import React from 'react'
import styles from './Section3.module.css'
import Image from 'next/image'
import Button2 from '../buttons/button2/Button2'
import { Heart, GitCompareArrows, Image as ImageGallery, GitMerge, Fuel, Gauge } from 'lucide-react'
import ImagePreview from '../ImagePreview/ImagePreview'
import { formatCurrency } from '../../utils/formatCurrency'
import { useRouter } from 'next/navigation'

const CarGrid = ({ filteredCars, loading }) => {
  const router = useRouter();
  const [previewImage, setPreviewImage] = React.useState({ index: null, url: null });

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.row2}>
      {filteredCars.map((car, index) => (
        <div key={index} className={styles.carCard} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
          <div className={styles.imageContainer}>
            <Image src={car.image} alt={car.name} width={500} height={300} />
            <div className={styles.imageTopTags}>
              <p className={styles.tag}>Featured</p>
              <p className={styles.tag}>{car.year}</p>
            </div>

            <div className={styles.hoverIcons}>
              <div className={styles.iconButton}>
                <GitCompareArrows />
              </div>
              <div className={styles.iconButton}>
                <Heart />
              </div>
            </div>
          </div>
          <div className={styles.carInfo}>
            <p className={styles.category}>{car.category}</p>
            <h3 className={styles.carName}>{car.name}</h3>
            <div className={styles.carSpecs}>
              <span><GitMerge className={styles.specIcon} />{car.mileage}</span>
              <span><Fuel className={styles.specIcon} /> {car.fueltype}</span>
              <span><Gauge className={styles.specIcon} /> {car.transmission}</span>
            </div>
            <h4 className={styles.carPrice}>{formatCurrency(car.price)}</h4>
            <div className={styles.bottom}>
              <div className={styles.viewCarButton}
                onClick={() => router.push(`/Cars/${car.carId}`)}>
                <Button2 title='View' icon={false} />
              </div>
              <div className={styles.imageGallery}>
                <ImageGallery
                  className={styles.icon}
                  onClick={() => setPreviewImage({
                    index: 0,
                    url: car.image,
                    images: [car.image, ...(car.additionalImage || [])]
                  })}
                /> {car.additionalImage?.length || 0}
              </div>
            </div>
          </div>
        </div>
      ))}
      {previewImage.url && (
        <ImagePreview
          images={previewImage.images}
          currentIndex={previewImage.index}
          onClose={(newIndex) => {
            if (newIndex === null) {
              setPreviewImage({ index: null, url: null, images: [] })
            } else {
              setPreviewImage({
                index: newIndex,
                url: previewImage.images[newIndex],
                images: previewImage.images
              })
            }
          }}
        />
      )}
    </div>
  )
}

export default CarGrid