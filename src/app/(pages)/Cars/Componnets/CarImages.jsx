import React, { useState } from 'react'
import styles from "./styles/CarImage.module.css"
import Image from 'next/image';
import { Image as ImageGallery } from 'lucide-react'
import ImagePreview from '../../../components/ImagePreview/ImagePreview';

const CarImages = ({ carImages }) => {

    const [current, setCurrent] = useState(0);
    const [previewImage, setPreviewImage] = React.useState({ index: null, url: null })

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                {carImages.map((data, index) => (
                    <div className={`${styles.card} ${index === current ? styles.activeCard : ""}`}
                        onClick={() => setCurrent(index)}
                        key={index}
                        style={{ transition: "all 0.3s ease" }}
                    >
                        <Image src={data} alt="image" width={300} height={200} className={styles.carImage} quality={100} />
                        <div className={styles.imageGallery}
                            onClick={() => setPreviewImage({
                                index,
                                url: carImages[0],
                                images: carImages
                            })}
                        >
                            <ImageGallery
                                className="icon"
                            /> {carImages?.length || 0}
                        </div>
                    </div>
                ))}
            </div>
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

export default CarImages