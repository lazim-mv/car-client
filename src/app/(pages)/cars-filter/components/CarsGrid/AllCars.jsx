'use client'
import React, { useEffect } from 'react'
import styles from './AllCars.module.css'
import Image from 'next/image'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { Heart, GitCompareArrows, Image as ImageGallery } from 'lucide-react'
import Link from 'next/link'
import Button2 from '../../../../components/buttons/button2/Button2'
import { useRouter } from 'next/navigation'
import { ChartArea } from 'lucide-react'
import { MessageCircleMore } from 'lucide-react'
import { GitMerge } from 'lucide-react'
import { Fuel } from 'lucide-react'
import { Gauge } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ImagePreview from '../../../../components/ImagePreview/ImagePreview'

const CarGrid = ({ cars, loading }) => {
    const router = useRouter();
    const [previewImage, setPreviewImage] = React.useState({ index: null, url: null })

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-in-out'
        })
    }, [])

    // if (loading || !cars) {
    //     return <div>Loading...</div>
    // }

    return (
        <div className={styles.grid}>
            {cars.length === 0 && <p>No cars found.</p>}
            {loading ? <p>Loading...</p> :
                <>
                    {cars.map((car, index) => (
                        <div key={car.carid} className={styles.carCard} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={car.image || '/placeholder-car.jpg'}
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
                                <p className={styles.category}>{car?.carcategory.name}</p>
                                <h3 className={styles.carName}>{car?.title}</h3>
                                <div className={styles.carSpecs}>
                                    <span><GitMerge className={styles.specIcon} />{car?.specifications?.mileage}</span>
                                    <span><Fuel className={styles.specIcon} /> {car?.specifications?.fueltype}</span>
                                    <span><Gauge className={styles.specIcon} /> {car?.specifications?.geartype}</span>
                                </div>
                                <h4 className={styles.carPrice}>{formatCurrency(car?.price)}</h4>
                                <div className={styles.bottom}>
                                    <div className={styles.viewCarButton}
                                        onClick={() => router.push(`/Cars/${car.carid}`)}>
                                        <Button2 title='View' icon={false} />
                                    </div>
                                    <div className={styles.imageGallery}>
                                        <ImageGallery
                                            className={styles.imageGalleryIcon}
                                            onClick={() => setPreviewImage({
                                                index,
                                                url: car?.image,
                                                images: [car?.image, ...(car?.additionalImages || [])],
                                            })}
                                        /> {car?.additionalImages?.length || 0}
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