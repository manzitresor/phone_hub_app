import { Component } from 'react';
import './App.css';
import Footer from './components/footer';
import Main from './components/main';
import NavBar from './components/nav';
import Login from './components/login';
import Store from './components/store';
import {Routes,Route} from "react-router-dom"
import Dashboard from './components/dashboard/dashboard';
import NewProduct from "./components/dashboard/newblog"
import Product from './components/dashboard/product';
class App extends Component {
  render(){
  return (
   <>
  
<Routes>
<Route axact path="/" element={<Main/>}></Route>
<Route  exact path="/login" element={<Login/>}></Route>
<Route exact path="/dashboard" element={<Dashboard/>}></Route>
<Route exact path="/newproduct" element={<NewProduct/>}></Route>
<Route exact path="/product" element={<Product/>}></Route>
<Route exact path="/store" element={<Store/>}></Route>
</Routes>
 
 


   
   </>
  );
}
}

export default App;
