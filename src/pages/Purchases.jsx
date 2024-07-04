import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchasesThunk } from '../stores/slices/purchaes.slice';

const Purchases = () => {

  const purchaesSlice = useSelector(store => store.purchaesSlice);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, [])
  

  console.log(purchaesSlice)

  return (
    <div>Purchases</div>
  )
}

export default Purchases