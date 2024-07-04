import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProdCard from '../components/homPage/ProdCard'
import { getProductsThunk }  from '../stores/slices/products.slice.js'
import './styles/homePage.css'
import FilterPrice from '../components/homPage/FilterPrice.jsx'
import FilterSelect from '../components/homPage/FilterSelect.jsx'
import "./styles/filterprice.css";



const body = document.querySelector('body')

const HomePage = () => {

  const [inputValue, setInputValue] = useState('')
  const [inputPrice, setInputPrice] = useState({
    min: 0,
    max: Infinity,
  })

  const [categoryValue, setCategoryValue] = useState('')

  const [menu, setMenu] = useState(false)

  const products = useSelector((store) => store.products)

  const dispatch = useDispatch()

  // console.log(categoryValue)

  console.log(products)

  useEffect(() => {
     dispatch(getProductsThunk());
  }, [])

  const textInput = useRef();

  const handleChange = () => {
    setInputValue(textInput.current.value.trim().toLowerCase())

  }

  const cbFilter = (prod) => {
    const name = prod.title.toLowerCase().includes
    (inputValue)
    const price = prod.price <= +inputPrice.max && +prod.price >= +inputPrice.min
    const category = categoryValue==='' ? true : prod.
    categoryId=== +categoryValue;
    return name && price && category;


  }
    
    const handleMenu = () => {
      setMenu(!menu)
    }

    const handleMode = () => {
      body.classList.toggle('dark')
    }

  
  
  return (
    <div className='homepage'>
    
    
      <div className={`homepage__filters ${menu && 'active'}`}>
        <button onClick={handleMenu}>X</button>
        <FilterPrice
              setInputPrice={setInputPrice}
          />
        
        <FilterSelect
          setCategoryValue={setCategoryValue}
        />
        <button onClick={handleMode}>Change mode</button>
        </div>
        <div>
          <input ref={textInput} onChange={handleChange}
           type="text" />
          <button>🔍</button>
        </div>
        
      <button className={menu ? 'active':''} onClick={handleMenu}>Menu</button>
      <div className='homepage__container'>
        {
          products?.filter(cbFilter).map((prod) =>(
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

export default HomePage