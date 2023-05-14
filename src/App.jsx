import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import OnSale from './pages/OnSale'
import ContactUs from './pages/ContactUs'
import Cart from './pages/Cart'
import Home from './pages/Home'
import LayOut from './LayOut/LayOut'
import NotFound from './pages/NotFound'
import { useState } from 'react'



function App() {
  const [cartList, setCartList] = useState([])
  const [filter,setFilter] = useState('')
  function handleFilter(e) {
    setFilter(e)
  }

  function addToCart(product) {
    const exist = cartList?.find(item => item.id === product?.id);
    if (exist) {
      setCartList(cartList.map((cartItem) => cartItem?.id === product?.id ? {...exist, quantity: exist.quantity += 1} : cartItem))
    } else {
      setCartList([...cartList, {...product, quantity: 1}])
    }
  }

  function handleDecrementQuantity(product) {
    const exist = cartList?.findIndex(item => item.id === product?.id);
    if (exist !== -1) {
      const updatedCartList = cartList.map(item => {
        if (item.id === product?.id) {
          const updatedItem = {...item };
          updatedItem.quantity = Math.max(updatedItem.quantity - 1, 0);
          return updatedItem;
        } else {
          return item;
        }
      });
      if (updatedCartList[exist].quantity === 0) {
        setCartList(updatedCartList.filter(item => item.id !== product?.id));
      } else {
        setCartList(updatedCartList);
      }
    }
  }
  
  console.log(cartList);

  return (
    <div>
      <Routes>
        <Route element={<LayOut cartList={cartList}/>}>
        <Route path='/' element={<Home filter={filter} addToCart={addToCart} handleFilter={handleFilter}/>}/>
        <Route path='/products' element={<Products filter={filter} handleFilter={handleFilter} setFilter={setFilter } addToCart={addToCart} />}/>
        <Route path='/onSale' element={<OnSale addToCart={addToCart}/>}  />
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/cart' element={<Cart cartList={cartList} handleDecrementQuantity={handleDecrementQuantity} addToCart={addToCart} />}/>
        <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
