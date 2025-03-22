'use client';

import { Car, ChevronDown } from 'lucide-react';
import styles from './MainFilterBar.module.css';
import { Bus } from 'lucide-react';
import { Truck } from 'lucide-react';
import { Search } from 'lucide-react';
import Link from 'next/link';

const MainFilterBar = () => {
    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchBar}>
                <div className={styles.selectGroup}>
                    <div className={styles.selectWrapper}>
                        <select className={styles.select} defaultValue="">
                            <option value="" disabled>Make</option>
                            <option value="toyota">Toyota</option>
                            <option value="honda">Honda</option>
                            <option value="bmw">BMW</option>
                        </select>
                        <ChevronDown className={styles.selectIcon} />
                    </div>
                    <div className={styles.selectWrapper}>
                        <select className={styles.select} defaultValue="">
                            <option value="" disabled>Model</option>
                            <option value="camry">Camry</option>
                            <option value="civic">Civic</option>
                            <option value="x5">X5</option>
                        </select>
                        <ChevronDown className={styles.selectIcon} />
                    </div>
                    <div className={styles.selectWrapper}>
                        <select className={styles.select} defaultValue="">
                            <option value="" disabled>Door</option>
                            <option value="2">2 Doors</option>
                            <option value="4">4 Doors</option>
                            <option value="5">5 Doors</option>
                        </select>
                        <ChevronDown className={styles.selectIcon} />
                    </div>
                    <div className={styles.selectWrapper}>
                        <select className={styles.select} defaultValue="">
                            <option value="" disabled>Body</option>
                            <option value="sedan">Sedan</option>
                            <option value="suv">SUV</option>
                            <option value="coupe">Coupe</option>
                        </select>
                        <ChevronDown className={styles.selectIcon} />
                    </div>
                </div>
                <Link href="/cars-filter">
                    <button className={styles.findButton}>Find Cars <Search className={styles.searchIcon} /></button>
                </Link>
            </div>
            <div className={styles.vehicleTypes}>
                <div className={styles.vehicleType}>
                    <Car size={24} />
                    <span>Coupe</span>
                </div>
                <div className={styles.vehicleType}>
                    <Car size={24} />
                    <span>Sedan</span>
                </div>
                <div className={styles.vehicleType}>
                    <Bus size={24} />
                    <span>MPV</span>
                </div>
                <div className={styles.vehicleType}>
                    <Truck size={24} />
                    <span>Hatchback</span>
                </div>
            </div>
        </div>
    )
}

export default MainFilterBar