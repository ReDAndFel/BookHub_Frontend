
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home';
import Account from './account/Account';
import AddLibro from './add_libro/AddLibro';
import Login from './login/Login';
import Signup from './signup/Signup';
import Categories from './categories/categories';
import Library from './library/Library';
import './App.css';
import Friends from './friends/Friends';
import Favorites from './favorites/Favorites';
import PaymentMethod from './payment_method/PaymentMethod';
import AddFriends from './add_friend/AddFriends';
import InfoBook from './info_book/InfoBook';
import Search from './search/Search';
import { AuthProvider } from './AuthContext';
import Profile from './profile/Profile';
import UpdateUser from './update_info_user/UpdateUser';
import AddPaymentMethod from './info_payment_method/AddPaymentMethod';
import ConfirmPay from './confirm_pay/ConfirmPay';
import Cart from './cart/Cart';
import { CartProvider } from './hooks/useCart';




function App() {
  return (

    <AuthProvider>
      <CartProvider>
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
            <Route path='/Nuevos_amigos' element={<AddFriends />} />
            <Route path='/Search/:filter/:value' element={<Search />} />
            <Route path='/Info_Libro/:idBook' element={<InfoBook />} />
            <Route path='/Perfil/:idUser' element={<Profile />} />
            <Route path='/Actualizar_informacion' element={<UpdateUser />} />
            <Route path='/Info_metodo_de_pago/:idPaymentMethod' element={<AddPaymentMethod />} />
            <Route path='/Info_metodo_de_pago/' element={<AddPaymentMethod />} />
            <Route path='/Confirmar_compra' element={<ConfirmPay />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>

  )
}

export default App
