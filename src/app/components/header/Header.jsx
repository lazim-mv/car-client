"use client";
import React, { useState } from 'react'
import styles from "./Header.module.css"
import Image from 'next/image'
import { Search } from 'lucide-react'
import { User2 } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import Button from '../buttons/Button'
import Link from 'next/link'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className={styles.desktopHeader}>
            <div className={styles.logoContainer}>
                <Image
                    width={225}
                    height={45}
                    src="/header/logoBlack.png"
                    alt='logo'
                />
            </div>
            <ul className={styles.lists}>
                <Link href="/"><li>Home </li></Link>
                <Link href="/about-us"><li>About</li></Link>
                {/* <li className={styles.buyCarMenu} onClick={handleMenuToggle}>
                    Buy Car <ChevronDown />

                    {isMenuOpen && <div className={styles.dropdown}>
                        <ul>
                            <li><Link href="/cars/suv">SUV</Link></li>
                            <li><Link href="/cars/sedan">Sedan</Link></li>
                            <li><Link href="/cars/hatchback">Hatchback</Link></li>
                            <li><Link href="/cars/sports">Sports Car</Link></li>
                            <li><Link href="/cars/luxury">Luxury Car</Link></li>
                            <li><Link href="/cars/electric">Electric Car</Link></li>
                        </ul>
                    </div>}
                </li> */}
                <Link href="/cars-filter">
                    <li>Buy a car</li>
                </Link>
                <Link href="/news">
                    <li>News</li>
                </Link>
            </ul>
            <div className={styles.icons}>
                <Search className={styles.icon} />
                <User2 className={styles.icon} />
            </div>
            <Link href="/contact" className={styles.icons}>
                <Button title="Contact" color="var(--secondary-color)" />
            </Link>
        </div>
    )
}

export default Header