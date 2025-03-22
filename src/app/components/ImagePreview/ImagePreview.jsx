"use client"
import React, { useEffect } from 'react'
import styles from './ImagePreview.module.css'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const ImagePreview = ({ imageUrl, onClose, images, currentIndex }) => {
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Escape') {
                onClose()
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                onClose(currentIndex - 1)
            } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
                onClose(currentIndex + 1)
            }
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [onClose, currentIndex, images.length])

    return (
        <div className={styles.overlay} onClick={() => onClose(null)}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={() => onClose(null)}>
                    <X />
                </button>
                {currentIndex > 0 && (
                    <button 
                        className={`${styles.navButton} ${styles.leftButton}`}
                        onClick={(e) => {
                            e.stopPropagation()
                            onClose(currentIndex - 1)
                        }}
                    >
                        <ChevronLeft />
                    </button>
                )}
                {currentIndex < images.length - 1 && (
                    <button 
                        className={`${styles.navButton} ${styles.rightButton}`}
                        onClick={(e) => {
                            e.stopPropagation()
                            onClose(currentIndex + 1)
                        }}
                    >
                        <ChevronRight />
                    </button>
                )}
                <Image
                src={imageUrl}
                alt="Car preview"
                width={800}
                height={600}
                className={styles.image}
                priority
            />
            </div>
        </div>
    )
}

export default ImagePreview