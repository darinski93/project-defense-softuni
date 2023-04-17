import './App.css';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

import { Routes, Route, useNavigate } from 'react-router-dom'
import CreatePizza from './components/Create/Create';
import DetailsPizza from './components/Details/Details';
import { authServiceFactory } from './services/authService'
import { productServiceFactory } from './services/productServices'

import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import EditPizza from './components/Edit/Edit';

import { useEffect, useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Logout from './components/Logout/Logout';




function App() {

  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [auth, setAuth] = useState({})
  const productServices = productServiceFactory(auth.accessToken)
  const authService = authServiceFactory(auth.accessToken)


  useEffect(() => {
    productServices.getAll()
      .then(setProducts)
      .catch(err => {
        console.log('Error' + err);
      })
  }, [])


  const onCreateProductSubmit = async (data) => {


    const newProduct = await productServices.create(data)
    setProducts(state => [...state, newProduct])
    navigate('/menu')

  }


  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result)
      navigate('/menu')

    } catch (error) {
      console.log('There is a problem');
    }
  }




  const onRegisterSubmit = async (values) => {

    const { confirmPassword, ...registerData } = values

    if (confirmPassword !== registerData.password) {
      return
    }

    try {

      const result = await authService.register(registerData)

      setAuth(result)

      navigate('/menu')

    } catch (error) {
      console.log('There is a problem');


    }

  }

  const onLogout = async () => {
    await authService.logout()

    setAuth({})
  }

  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,

  }

  return (



    <>
      <AuthContext.Provider value={context}>
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu products={products} />} />
            <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/edit' element={<EditPizza />} />
            <Route path='/menu/:productId' element={<DetailsPizza />} />
            <Route path='/create' element={<CreatePizza onCreateProductSubmit={onCreateProductSubmit} />}></Route>
          </Routes>


        </main>



        <Footer />
      </AuthContext.Provider>
    </>

  );
}

export default App;
