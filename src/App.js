import React,{useContext} from 'react';
import { Button } from 'react-bootstrap';
import {  Route,Routes,Switch ,Navigate} from 'react-router-dom';
import Navigation from './components/common/Navigation.js';
import Store from './components/Pages/Store.js';
import About from './components/Pages/About.js';
import CartProvider from './store/CartProvide.js';
import Home from './components/Pages/Home.js';
import Contact from './components/Pages/Contact.js';
import ProductDetail from './components/Pages/ProductDetail.js';
import Login from './components/Pages/LogIn.js';
import LogIn from './components/Pages/LogIn.js';
import TokenContext from './store/TokenContext.js';


const App=()=> {
  const authctx=useContext(TokenContext);
  //console.log(authctx);
  const login=authctx.isLoggedIn
async function sendDataHandler(person){
   const response=await fetch("https://moviereact-2183d-default-rtdb.firebaseio.com/customers.json",{
    method:'POST',
    body:JSON.stringify(person),
    headers:{
      'Content-Type':"application/json"
    }
   });
}
   let content;
   if(!login)
    {
     content=<Navigate replace to="/login" />
    }
    else
    {
     content=<><Navigation></Navigation><Store></Store></>
    }
  return (
   <div>
   <CartProvider>
  <Routes>
  <Route path='/store' element={content} exact>
   </Route>
   <Route path='/about'element={<About />}></Route>
   <Route path='/home'element={<Home />}></Route>
   <Route path='/contact'element={<Contact onAddperson={sendDataHandler} />}></Route>
   <Route path='/' element={<Home />}></Route>
   <Route path='/store/:productId' element={<ProductDetail />} exact></Route>
   <Route path='/login' element={<LogIn />} exact></Route>
   </Routes>
   </CartProvider>
 </div> 
   )
}

export default App;
