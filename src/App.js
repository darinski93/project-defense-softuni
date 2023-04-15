// import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

import { Routes, Route } from 'react-router-dom'
import CreatePizza from './components/Create/Create';
import DetailsPizza from './components/Details/Details';


import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import EditPizza from './components/Edit/Edit';

import * as productServices from './services/productServices'
import { useEffect, useState } from 'react';











function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    productServices.getAll()
      .then(setProducts)
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
          <Route path='/details' element={<DetailsPizza products={products}/>} />
          <Route path='/create' element={<CreatePizza />}></Route>
        </Routes>


      </main>



      <Footer />

    </>
  );
}

export default App;
