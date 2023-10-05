
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
import Friends from './friends/Friends';
import Favorites from './favorites/Favorites';
import PaymentMethod from './payment_method/PaymentMethod';
import AddFriends from './add_friend/AddFriends';



function App() {
  return (
    <div className='main_container'>
      <Routes className='routes_container'>
        <Route path='/' element={<Login />} />
        <Route path='/Inicio' element={<Home />} />
        <Route path='/Cuenta' element={<Account />} />
        <Route path='/Agregar_libro' element={<AddLibro />} />
        <Route path='/Categorias' element={<Categories />} />
        <Route path='/Carrito' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Libreria/:idUser' element={<Library />} />
        <Route path='/Metodos_de_pago/:idUser' element={<PaymentMethod />} />
        <Route path='/Amigos/:idUser' element={<Friends />} />
        <Route path='/Favoritos/:idUser' element={<Favorites />} />
        <Route path='/Agregar_amigo/:idUser' element={<AddFriends />} />
        <Route path='/Inicio/Category/:category' element={<Home />} />
        
      </Routes>      
    </div>
  )
}

export default App
