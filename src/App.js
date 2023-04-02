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





function App() {

  


  return (

    <>
      
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreatePizza />} />
          <Route path='/edit' element={<EditPizza />} />
          <Route path='/details' element={<DetailsPizza />} />

        </Routes>

      </main>



      <Footer />

    </>
  );
}

export default App;
