'use client';

import React from 'react';

const Logo = ({ width = 200, height = 50, color = '#000000' }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 300 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2c3e50" />
                    <stop offset="100%" stopColor="#34495e" />
                </linearGradient>
            </defs>

            {/* Stylized car icon */}
            <path 
                d="M15 35 L8 35 C4 35, 4 27, 8 27 L32 27 C36 27, 36 19, 32 19 L16 19 C12 19, 12 11, 16 11 L40 11" 
                stroke="url(#logoGradient)" 
                strokeWidth="2.5" 
                fill="none"
            />

            {/* Main text */}
            <text
                x="50"
                y="32"
                fontFamily="'Montserrat', sans-serif"
                fontSize="24"
                fontWeight="700"
                fill="#2c3e50"
                letterSpacing="1"
            >
                AUTOTRADERS
            </text>

            {/* Subtle underline */}
            <line 
                x1="50" 
                y1="40" 
                x2="210" 
                y2="40" 
                stroke="#2c3e50" 
                strokeWidth="1.2" 
                strokeOpacity="0.3"
            />
        </svg>
    );
};

export default Logo;