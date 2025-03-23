import React from 'react'
import styles from './styles/CarOverview.module.css'
import { Car, Users, Calendar, Fuel, Gauge, DoorOpen, Palette, Truck } from 'lucide-react'

const CarOverview = ({ data }) => {
    const specs = [
        {
            label: "Condition:",
            value: data?.condition || "Null",
            icon: <Car className={styles.icon} />
        },
        {
            label: "Year:",
            value: data?.year,
            icon: <Calendar className={styles.icon} />
        },
        {
            label: "Seat:",
            value: data?.seat || "Null",
            icon: <Users className={styles.icon} />
        },
        {
            label: "Power:",
            value: data?.car_specifications?.enginecapacity || "Null",
            icon: <Gauge className={styles.icon} />
        },
        {
            label: "Fuel Type:",
            value: data?.car_specifications?.fueltype || "Null",
            icon: <Fuel className={styles.icon} />
        },
        {
            label: "Doors:",
            value: data?.doors || "Null",
            icon: <DoorOpen className={styles.icon} />
        },
        {
            label: "Color:",
            value: data?.color || "Null",
            icon: <Palette className={styles.icon} />
        },
        {
            label: "Drive Type:",
            value: data?.driveType || "Null",
            icon: <Truck className={styles.icon} />
        }
    ]

    return (
        <div className={styles.container} id='caroverview'>
            <h2>Car overview</h2>
            <div className={styles.specs}>
                {specs.map((spec, index) => (
                    <div key={index} className={styles.specItem}>
                        {spec.icon}
                        <p className={styles.label}>{spec.label}</p>
                        <p className={styles.value}>{spec.value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarOverview