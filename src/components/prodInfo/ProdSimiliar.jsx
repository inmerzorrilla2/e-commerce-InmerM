import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import ProdCard from '../homPage/ProdCard'
import './styles/prodsimilar.css'

const ProdSimiliar = ({product}) => {

  // console.log(product)

  const [items, getItems] = useFetch()



  useEffect(() => {
      if (product) {
          const path = `/products?categoryId=${product.categoryId}`
          getItems(path)
      }
  }, [product])

  const cbFilter = (prod) => {
    return prod.id !== product.id;
  }
 

  return (
    <div className='prodsimiliar'>
      <h2 className='prodsimilar_tittle'>Discover similar items</h2>
      <div className='homepage__container'>
        {
          items?.filter(cbFilter).map(prod => (
            <ProdCard
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ProdSimiliar