import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

import { Routes, Route } from 'react-router-dom'


import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';
import CreatePizza from './components/CreatePizza';
import EditPizza from './components/EditPizza';
import DetailsPizza from './components/DetailsPizza';

import * as productServices from './services/productServices'
import { useEffect, useState } from 'react';





function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    productServices.getAll()
      .then(products => {
        setProducts(products);

      })
      .catch(err => {
        console.log('Error' + err);
      })



  }, [])



  return (

    <>

      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu products={products} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreatePizza />} />
          <Route path='/edit' element={<EditPizza />} />
          <Route path='/details' element={<DetailsPizza />} />
          <Route path='/create' element={<CreatePizza />}></Route>
        </Routes>


      </main>



      <Footer />

    </>
  );
}

export default App;
