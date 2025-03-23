"use client"
import React, { useState } from 'react'
import styles from './styles/Loan.module.css'
import { ChevronDown } from 'lucide-react'

const LoanComponent = () => {
    const [period, setPeriod] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const periods = [12, 24, 36, 48, 60];

    return (
        <div className={styles.container} id='carloancalculator'>
            <h2>Auto Loan Calculator</h2>
            <p className={styles.description}>Use our calculator to estimate your monthly car payments.</p>

            <div className={styles.inputGroup}>
                <label>Total Price</label>
                <input type="number" placeholder="10,000" />
            </div>

            <div className={styles.row}>
                <div className={styles.inputGroup}>
                    <label>Down payment</label>
                    <input type="number" placeholder="3,000" />
                </div>

                <div className={styles.inputGroup}>
                    <label>Amortization Period (months)</label>
                    <div className={styles.select} onClick={() => setIsOpen(!isOpen)}>
                        <span>{period || 'Select Amortization Period'}</span>
                        <ChevronDown className={styles.icon} />
                        {isOpen && (
                            <div className={styles.options}>
                                {periods.map((p) => (
                                    <div 
                                        key={p} 
                                        className={styles.option}
                                        onClick={() => {
                                            setPeriod(p);
                                            setIsOpen(false);
                                        }}
                                    >
                                        {p} months
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.inputGroup}>
                <label>Interest rate</label>
                <input type="number" placeholder="5" />
            </div>

            <div className={styles.result}>
                <div className={styles.resultItem}>
                    <span>Down payment amount</span>
                    <strong>$3,000</strong>
                </div>
                <div className={styles.resultItem}>
                    <span>Monthly payment</span>
                    <strong className={styles.monthly}>$245</strong>
                </div>
            </div>

            <button className={styles.applyBtn}>
                Apply for a loan
            </button>
        </div>
    )
}

export default LoanComponent