'use client'
import { useRouter } from 'next/navigation'
import styles from './Pagination.module.css'

const Pagination = ({ currentPage, totalPages, searchParams }) => {
    const router = useRouter()

    const handlePageChange = (page) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', page)
        router.push(`/cars-filter?${params.toString()}`)
    }

    const renderPageNumbers = () => {
        const pages = []
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`${styles.pageButton} ${currentPage === i ? styles.active : ''}`}
                >
                    {i}
                </button>
            )
        }
        return pages
    }

    return (
        <div className={styles.pagination}>
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={styles.pageButton}
            >
                Previous
            </button>
            {renderPageNumbers()}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={styles.pageButton}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination