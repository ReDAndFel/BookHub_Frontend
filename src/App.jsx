
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home';
import Account from './account/Account'
import AddLibro from './add_libro/AddLibro'
import Cart from './Cart/Cart'
import Login from './login/Login';
import Signup from './signup/Signup';
import Categories from './categories/categories';
import Library from './library/Library';
import './App.css';


function App() {
  return (
    <div className='main_container'>
      <Routes className='routes_container'>
        <Route path='/' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/Add_Libro' element={<AddLibro />} />
        <Route path='/Categorias' element={<Categories />} />
        <Route path='/Carrito' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Libreria/:idUser' element={<Library />} />
        
      </Routes>      
    </div>
  )
}

export default App
