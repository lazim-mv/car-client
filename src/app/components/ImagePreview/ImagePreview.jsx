"use client"
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './ImagePreview.module.css'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Loader } from 'lucide-react'

const ImagePreview = ({ images, onClose, currentIndex: initialIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex || 0)
    const overlayRef = useRef(null)
    const [mounted, setMounted] = useState(false)
    const [viewport, setViewport] = useState({ top: 0, left: 0, width: 0, height: 0 })
    const [isLoading, setIsLoading] = useState(true)

    console.log(images, "images")

    useEffect(() => {
        setMounted(true);
        setIsLoading(true); 

        // Calculate viewport position and dimensions
        const viewportTop = window.scrollY
        const viewportLeft = window.scrollX
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        setViewport({
            top: viewportTop,
            left: viewportLeft,
            width: viewportWidth,
            height: viewportHeight
        })

        // Access the global Lenis instance - you can replace this with how you access Lenis in your app
        // Try all common ways Lenis might be accessible
        const lenisInstance = window.lenis || window.__lenis || document.lenis;

        // If Lenis is found, directly stop it
        if (lenisInstance) {
            // This is the key part - using Lenis's own method
            lenisInstance.stop();

            // You can also try these depending on your Lenis version
            // lenisInstance.destroy();
            // lenisInstance.isStopped = true;
        }

        return () => {
            // Restart Lenis when component unmounts
            if (lenisInstance) {
                lenisInstance.start();

                // If you used destroy, you might need to reinitialize
                // Or if using the flag: lenisInstance.isStopped = false;
            }
        }
    }, [])

    useEffect(() => {
        setIsLoading(true);
    }, [currentIndex]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Escape') {
                onClose(null)
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                setCurrentIndex(prev => prev - 1)
            } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
                setCurrentIndex(prev => prev + 1)
            }
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [onClose, currentIndex, images.length])

    // Return null during SSR
    if (!mounted) return null

    // Create dynamic overlay style
    const dynamicOverlayStyle = {
        position: 'absolute',
        top: `${viewport.top}px`,
        left: `${viewport.left}px`,
        width: `${viewport.width}px`,
        height: `${viewport.height}px`,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999
    }

    // Handle image load complete
    const handleImageLoaded = () => {
        setIsLoading(false);
    };

    const handleClose = () => {
        onClose(null);
        setCurrentIndex(0);
    }

    // Use createPortal to render at document body level
    return createPortal(
        <div
            style={dynamicOverlayStyle}
            onClick={handleClose}
            ref={overlayRef}
        >
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button
                    className={styles.closeButton}
                    onClick={handleClose}
                    type="button"
                >
                    <X size={24} />
                </button>

                <div className={styles.imageWrapper}>
                    {isLoading && (
                        <div className={styles.loaderContainer}>
                            <Loader size={48} className={styles.loader} />
                        </div>
                    )}
                    <Image
                        src={images[currentIndex]}
                        alt={`Preview ${currentIndex + 1}`}
                        width={1200}
                        height={800}
                        className={`${styles.image} ${isLoading ? styles.imageLoading : ''}`}
                        priority
                        onLoad={handleImageLoaded}
                    />
                </div>

                {currentIndex > 0 && (
                    <button
                        type="button"
                        className={`${styles.navButton} ${styles.leftButton}`}
                        onClick={(e) => {
                            e.stopPropagation()
                            setCurrentIndex(prev => prev - 1)
                        }}
                    >
                        <ChevronLeft size={24} />
                    </button>
                )}
                {currentIndex < images.length - 1 && (
                    <button
                        type="button"
                        className={`${styles.navButton} ${styles.rightButton}`}
                        onClick={(e) => {
                            e.stopPropagation()
                            setCurrentIndex(prev => prev + 1)
                        }}
                    >
                        <ChevronRight size={24} />
                    </button>
                )}
            </div>
        </div>,
        document.body
    )
}

export default ImagePreview