import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartProdsThunk, setCart } from '../stores/slices/cart.slices'
import ItemCart from '../components/cartPage/ItemCart'
import './styles/cartPages.css'
import { postPurchasesThunk } from '../stores/slices/purchaes.slice'

const CartPage = () => {

  const cart = useSelector((store) => store.cartSlices)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCartProdsThunk())

  }, [])
  

 const products = cart.reduce(
  (cv, prod) => cv += prod.quantity, 0);

  const total = cart.reduce(
    (cv, prod) => cv += prod.quantity * prod.product?.price, 0
  );

  const handleBuy = () => {
    dispatch(postPurchasesThunk());
    dispatch(setCart([]));
  }


  return (
    <div className='cartpage'>
      <div className='cartpage__container'>
        {
          cart?.map(prod =>(
            <ItemCart 
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>
      <div className='cartpage__totals'>
        <ul className='cartpage__list'>
          <li className='cartpage__item'><span>Prducts</span><span>{products}</span></li>
          <li className='cartpage__item'><span>Total:</span><span>{total}</span></li>
        </ul>
        <button onClick={handleBuy} className='cartpage__btn'>Buy all products</button>
      </div>
    </div>
  )
}

export default CartPage