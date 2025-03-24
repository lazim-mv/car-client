'use client';
import { useEffect } from 'react';
import AOS from 'aos';

const AosProvider = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-in-out'
        });
    }, []);

    return children;
};

export default AosProvider;