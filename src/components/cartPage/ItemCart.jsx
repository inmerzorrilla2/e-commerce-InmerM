import React from 'react'
import './styles/itemCart.css'
import { deleteProductThunk, updateProductThunk } from '../../stores/slices/cart.slices'
import { useDispatch } from 'react-redux'

const ItemCart = ({prod}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
       dispatch(deleteProductThunk(prod.id))
    }

    const handleLess = () => {
        if (prod.quantity > 1) {
            dispatch(updateProductThunk(prod.id, {
                "quantity": prod.quantity - 1,
                

        }))

    }
}

    const handlePlus = () => {
        dispatch(updateProductThunk(prod.id, {
            "quantity": prod.quantity - 1,
        }))

    }

  return (
    <article className='itemcart'>
        <h3 className='itemcart__title'>{prod.product?.title}</h3>
        <figure className='itemcart__img'>
            <img src={prod.product?.images[0].url} alt="product image" />
        </figure>
        <div className='itemcart__button'>
            <button onClick={handleLess}>-</button>
            <span>{prod.quantity}</span>
            <button onClick={handlePlus}>+</button>
        </div>
        <button onClick={handleDelete} className='itemcart__btn'>delete</button>
        <p className='itemcart__total'>Total: $ <span>{prod.product?.price * prod.quantity}</span></p>
    </article>
  )
}

export default ItemCart