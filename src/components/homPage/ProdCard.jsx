import React from 'react'
import './styles/proCard.css'
import { useNavigate } from 'react-router-dom'
import { postProductsThunk } from '../../stores/slices/cart.slices'
import { useDispatch } from 'react-redux'

const ProdCard = ({prod}) => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleDetalis = () => {
        navigate(`/product/${prod.id}`);

    }

    const handleAddCart = () => {
        dispatch(postProductsThunk({        
                "quantity": 1,
                "productId": prod.id,      
    }))
    }

  return (
    <article className='prodcard'>
    <figure className='prodcard__img'>
        <img src={prod.images[0].url} alt="product image" />
        <img src={prod.images[1].url} alt="product image" />
    </figure>
    <hr className='procard__div'/>
    <ul>
        <li className='prodcard__list'><span>{prod.brand}</span><span>{prod.title}</span></li>
        <li className='procard__item'><span>Price</span><span>{prod.price}</span></li>
    </ul>
    <div className='procard__button'>
        <button onClick={handleDetalis}>Detail</button>
        <button onClick={handleAddCart}>Add to cart</button>
    </div>

    </article>
  )
}

export default ProdCard