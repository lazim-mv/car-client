import React, { useState } from 'react'
import styles from './styles/CarDescription.module.css'
import { GitMerge } from 'lucide-react'
import { Fuel } from 'lucide-react'
import { Gauge } from 'lucide-react'
import { formatCurrency } from '../../../utils/formatCurrency'
import { ChevronUp } from 'lucide-react'
import { ChevronDown } from 'lucide-react'

const CarDescription = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className={styles.container} id='cardescription'>
      <div className={styles.carInfo}>
        <p className={styles.category}>{data?.carbrand?.name}</p>
        <h3 className={styles.carName}>{data?.title}</h3>
        <div className={styles.carSpecs}>
          <span><GitMerge className={styles.specIcon} />{data?.car_specifications?.mileage || "Not Added"}</span>
          <span><Fuel className={styles.specIcon} /> {data?.car_specifications?.fueltype || "Not Added"}</span>
          <span><Gauge className={styles.specIcon} />{data?.car_specifications?.geartype || "Not Added"}</span>
        </div>
        <h4 className={styles.carPrice}>{formatCurrency(35200)}</h4>
      </div>
      <div className={styles.content}>
        <h2>Description</h2>
        <div className={`${styles.description} ${showMore ? styles.expanded : ''}`} style={{ transition: "all 0.3s ease" }}>
          <p>
              {data.description || "No Description"}
          </p>
           
        </div>
        <p className={styles.showMoreBtn} onClick={() => setShowMore(!showMore)}>
          Show {showMore ? 'Less' : 'More'} {showMore ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </p>
      </div>
    </div>
  )
}

export default CarDescription