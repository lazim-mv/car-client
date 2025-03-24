'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'

const useGetCarCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data, error } = await supabase
                    .from('carcategory')
                    .select('id, name')
                    .order('name')

                if (error) throw error
                setCategories(data)
            } catch (error) {
                console.error('Error fetching categories:', error)
                setCategories([])
            }
        }

        fetchCategories()
    }, [])

    return { categories }
}

export default useGetCarCategories