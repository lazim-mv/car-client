"use client"
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from 'react'

const AosWrapper = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-in-out'
        });
    }, []);
    return (children)
}

export default AosWrapper