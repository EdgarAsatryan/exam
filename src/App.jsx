import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import OnSale from './pages/OnSale'
import ContactUs from './pages/ContactUs'
import Cart from './pages/Cart'
import Home from './pages/Home'
import LayOut from './LayOut/LayOut'
import NotFound from './pages/NotFound'


function App() {
  return (
    <div>
      <Routes>
        <Route element={<LayOut/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/onSale' element={<OnSale/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
