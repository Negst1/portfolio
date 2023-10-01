import { Fragment, useState } from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/main/Main';
import data from "./data/Cards"
import { Route, Routes } from 'react-router-dom';
import Cart from './component/cart/Cart';
import Checkout from './component/checkout/Checkout';
import Footer from './component/footer/Footer';
import Contacts from './pages/footer/company/contacts/Contacts';
import PersonalOffice from './pages/header/personal-office/PersonalOffice';

function App() {
  const {products} = data;
  const [cartItems,setCartItems] = useState([]);
  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map((x) => 
        x.id === product.id ? {...exist, qty: exist.qty + 1} : x
      ))
    }else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  
  const removeCart = (products) =>{
    const exist = cartItems.find((x) => x.id === products.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== products.id))
    } else {
      setCartItems(cartItems.map((x) => 
        x.id === products.id ? {...exist, qty: exist.qty - 1} : x
      ))
    }
  }

  return (
    <Fragment>
      <div className="container">
        <Header cartItems={cartItems}/>
        <Routes>
          <Route path="/" element={<Main addToCart={addToCart}/>} />
          <Route path="/shopping_cart" element={<Cart cartItems={cartItems} addToCart={addToCart} removeCart={removeCart}/>} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems}/>} />
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/personal__office" element={<PersonalOffice/>}/>
        </Routes>
        
        </div>
        <Footer/>
    </Fragment>
  );
}

export default App;
