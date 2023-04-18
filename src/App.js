import './App.css';

import { ProductProvider } from './contexts/ProductContext';
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
import { AuthProvider } from './contexts/AuthContext';
import Logout from './components/Logout/Logout';
import { RouteGuard } from './components/common/RouteGuard';
import { ProductOwner } from './components/common/ProductOwner';
import Error from './components/Error/Error';





function App() {



  return (

    <AuthProvider>
      <ProductProvider>


        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/menu/:productId' element={<DetailsPizza />} />

            <Route element={<RouteGuard />}>
              <Route path='/create' element={<CreatePizza />} />


              <Route path='/menu/:productId/edit' element={
                <ProductOwner>
                  <EditPizza />
                </ProductOwner>
              } />


              <Route path='/logout' element={<Logout />} />
            </Route>

            <Route path='/*' element={<Error />} />
          </Routes>
        </main>
        <Footer />

      </ProductProvider>
    </AuthProvider>

  );
}

export default App;
