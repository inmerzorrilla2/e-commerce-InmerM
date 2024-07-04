import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'

const FilterSelect = ({setCategoryValue}) => {

    const [categories, getCategories] = useFetch();
    

    useEffect(() => {
      getCategories('/categories')
    }, [])

    const itemSelect = useRef();

    const handleChange = () =>{
        setCategoryValue(itemSelect.current.value)

    }
    

    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'

  return (
    <select ref={itemSelect} onChange={handleChange}>
        <option value="">all products</option>
        {
            categories?.map((category) => (
                <option key={category.id} value="{category.id}">
                    {category.name}
                </option>
            ))
        }
    </select>
  )
}

export default FilterSelect