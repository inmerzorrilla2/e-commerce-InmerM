import React, { useEffect } from 'react'
import ProdSimiliar from '../components/prodInfo/ProdSimiliar'
import ProdSlider from '../components/prodInfo/ProdSlider'
import ProdDetail from '../components/prodInfo/ProdDetail'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../stores/slices/products.slice'
import './styles/prodinfo.css'

const Prodinfo = () => {

  const {id} = useParams()

  const dispatch = useDispatch()

  const products = useSelector(store => store.products)

 useEffect(() => {
  dispatch(getProductsThunk())
  
 }, [])

 const product = products?.filter(prod => prod.id === +id)[0]

 console.log(product)
 console.log(id)
 
  return (
    <div>     
      <ProdSlider
        product={product}
      />
      <ProdDetail
        product={product}
      />
      <ProdSimiliar
        product={product}
      />
    </div>
  )
}

export default Prodinfo