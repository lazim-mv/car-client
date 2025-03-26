'use client'
import React from 'react'
import styles from './AllCars.module.css'
import Image from 'next/image'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { Heart, GitCompareArrows, Image as ImageGallery } from 'lucide-react'
import Button2 from '../../../../components/buttons/button2/Button2'
import { useRouter } from 'next/navigation'
import { GitMerge } from 'lucide-react'
import { Fuel } from 'lucide-react'
import { Gauge } from 'lucide-react'

import ImagePreview from '../../../../components/ImagePreview/ImagePreview'

const CarGrid = ({ cars, loading }) => {
    const router = useRouter();
    const [previewImage, setPreviewImage] = React.useState({ index: null, url: null });

    return (
        <div className={styles.grid}>
            {cars.length === 0 && !loading && <p>No cars found.</p>}
            {loading ? <p>Loading...</p> :
                <>
                    {cars.map((car, index) => (
                        <div key={car.carid} className={styles.carCard} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={car?.car_images?.image || '/placeholder-car.jpg'}
                                    alt={car.title}
                                    width={300}
                                    height={200}
                                    className={styles.image}
                                />
                                <div className={styles.badges}>
                                    {car.starredproduct && <span className={styles.badge}>Featured</span>}
                                    <span className={styles.badge}>{car.year}</span>
                                </div>
                                <div className={styles.actions}>
                                    <button className={styles.actionButton}>
                                        <Heart size={20} />
                                    </button>
                                    <button className={styles.actionButton}>
                                        <GitCompareArrows size={20} />
                                    </button>
                                </div>
                            </div>
                            <div className={styles.carInfo}>
                                <p className={styles.category}>{car?.carcategory?.name}</p>
                                <h3 className={styles.carName}>{car?.title}</h3>
                                <div className={styles.carSpecs}>
                                    <span><GitMerge className={styles.specIcon} />{car?.car_specifications?.mileage}</span>
                                    <span><Fuel className={styles.specIcon} /> {car?.car_specifications?.fueltype}</span>
                                    <span><Gauge className={styles.specIcon} /> {car?.car_specifications?.geartype}</span>
                                </div>
                                <h4 className={styles.carPrice}>{formatCurrency(car?.price)}</h4>
                                <div className={styles.bottom}>
                                    <div className={styles.viewCarButton}
                                        onClick={() => router.push(`/Cars/${car.carid}`)}>
                                        <Button2 title='View' icon={false} />
                                    </div>
                                    <div
                                        className={styles.imageGallery}
                                        style={{ position: "relative", zIndex: "100" }}
                                        onClick={() => {
                                            // console.log("Clicked");
                                            // console.log("car.image:", car?.car_images?.image);
                                            // console.log("additionalimages:", car?.car_images?.additionalimages);

                                            setPreviewImage({
                                                index,
                                                url: car?.car_images?.image,
                                                images: [car?.car_images?.image, ...(car?.car_images?.additionalimages || [])],
                                            });
                                        }}
                                    >
                                        <ImageGallery
                                            className="icon"
                                        /> {car?.car_images?.additionalimages?.length + 1 || 0}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            }

            {previewImage.url && (
                <ImagePreview
                    images={previewImage.images}
                    currentIndex={0}
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