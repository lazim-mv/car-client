"use client"
import React, { useState, useEffect } from 'react';
import styles from './LoanCalculator.module.css';

const LoanCalculator = () => {

    const [formData, setFormData] = useState({
        totalPrice: 100,
        downPayment: 100,
        interestRate: 5,
        amortizationPeriod: 12 
    });

    const [monthlyPayment, setMonthlyPayment] = useState(0);

    const calculateMonthlyPayment = () => {
        const principal = formData.totalPrice - formData.downPayment;
        const monthlyRate = (formData.interestRate / 100) / 12;
        const numberOfPayments = formData.amortizationPeriod;

        if (principal <= 0 || monthlyRate <= 0 || numberOfPayments <= 0) {
            setMonthlyPayment(0);
            return;
        }

        const monthlyPayment =
            (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

        setMonthlyPayment(Math.round(monthlyPayment * 100) / 100);
    };

    useEffect(() => {
        calculateMonthlyPayment();
    }, [formData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: parseFloat(value) || null
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add API call for loan application
    };

    return (
        <div className={styles.container} >
            <div className={styles.parallaxBackground}></div>
            <div className={styles.calculatorCard} data-aos="fade-up">
                <h2>Auto Loan Calculator</h2>
                <p>Use our calculator to estimate your monthly car payments.</p>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>Total Price</label>
                        <input
                            type="number"
                            name="totalPrice"
                            value={formData.totalPrice}
                            onChange={handleInputChange}
                            min="0"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Down payment</label>
                        <input
                            type="number"
                            name="downPayment"
                            value={formData.downPayment}
                            onChange={handleInputChange}
                            min="0"
                            max={formData.totalPrice}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Interest rate (%)</label>
                        <input
                            type="number"
                            name="interestRate"
                            value={formData.interestRate}
                            onChange={handleInputChange}
                            min="0"
                            max="100"
                            step="0.1"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Amortization Period (months)</label>
                        <select
                            name="amortizationPeriod"
                            value={formData.amortizationPeriod}
                            onChange={handleInputChange}
                        >
                            <option value="12">12 months</option>
                            <option value="24">24 months</option>
                            <option value="36">36 months</option>
                            <option value="48">48 months</option>
                            <option value="60">60 months</option>
                        </select>
                    </div>

                    <div className={styles.resultGroup}>
                        <div className={styles.paymentResult}>
                            <p>Down payment amount</p>
                            <strong>{formData?.downPayment?.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</strong>
                        </div>
                        <div className={styles.paymentResult}>
                            <span>Monthly payment</span>
                            <span><strong>{monthlyPayment.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</strong></span>
                        </div>
                    </div>

                    <button type="submit" className={styles.applyButton}>
                        Apply for a loan
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoanCalculator;