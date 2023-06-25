import { useState } from 'react'
import './App.css'
import CandyModal from './components/CandyModal'
import Header from './components/Header/Header'
import CandyList from './components/CandyList'
import CartProvider from './store/CartProvider'
function App() {
 const[cartIsShown,setCartIsShown]=useState(false)

 const showCartHandler=()=>{
  setCartIsShown(true)
 }

 const hideCartHandler=()=>{
   setCartIsShown(false)
 }
  return (
   <CartProvider>
   {cartIsShown && <CandyModal onClose={hideCartHandler}/>}
   <Header onShowCart={showCartHandler}/>
   <CandyList/>
   </CartProvider>
  )
}

export default App
