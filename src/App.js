import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Video from './components/Video';
//import Loading from './components/Loading';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';




function App() {

  return (

    <>
      {/* <Loading /> */}
      <Header />

      <main>
        <Routes>
          <Route path='/home' element={<Video />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>

      </main>



      <Footer />

    </>
  );
}

export default App;
