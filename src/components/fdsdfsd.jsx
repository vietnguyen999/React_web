import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'
import Collection from './pages/Collection'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Contact from './pages/Contact'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'

const App = () => {
  return (
   
  
    <div >
      <h2>Home</h2>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/place-order' element={<PlaceOrder/>}/>
      <Route path='/product:productId' element={<Product/>}/>
      <Route path='/order' element={<Orders/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
      
    </div>
 
  )
}

export default App
