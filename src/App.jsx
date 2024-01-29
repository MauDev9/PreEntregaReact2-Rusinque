import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import './App.css'
import FooterComponent from './components/Footer/Footer'

import data from './db/products.json'
import ProductDetail from './pages/Products/Details/ProductDetail';
import Category from './pages/Products/Categorys/Category'
function App() {


  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} />
        <Route path="/products/:categoryId" exact={true} component={Category} />
        <Route path="/products/:id/detail" exact={true} component={ProductDetail} />
      </Switch>
      </Router>
     <FooterComponent/>
    </>
  )
}

export default App
