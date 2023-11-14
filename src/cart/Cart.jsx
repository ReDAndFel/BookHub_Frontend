import { useEffect, useState } from "react";
import BookItem from "../book_item/BookItem";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import './Cart.css'
import Button from "../button/Button";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Cart() {
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
    const [listBooksSelected, setListBooksSelected] = useState([]);

    const [idUser, setIdUser] = useState('');
    const [isLoged, setIsLoged] = useState(false);
    const { cartList, removeFromCart } = useCart();


    const { token } = useAuth();

    useEffect(() => {

        if (token.idUser != "") {
            setIdUser(token.idUser);
            setIsLoged(true)
        }

    }, [])

    useEffect(() => {
        const total = cartList.reduce((sum, book) => sum + book.price, 0);
        setTotalPrice(total);
    }, [cartList]);

    const handleDelete = () => {
        console.log(listBooksSelected);
        listBooksSelected.forEach((book) => removeFromCart(book));
        setListBooksSelected([]);
    }

    const handleConfirmBuy = () => {
        navigate("/Confirmar_compra")
    }

    return (
        <>
            <Header goBack goBackNavigate={"/Inicio"}>Mi Carrito</Header>
            {listBooksSelected.length > 0 && <div className="button_cart_delete"><Button handlerClick={handleDelete}>Quitar Libro</Button></div>}

            {isLoged ? (
                <div className='cart_container'>

                    <div className="cart_list_books">
                        {
                            cartList.map((book) => <BookItem key={book.id} list={listBooksSelected} setList={setListBooksSelected} book={book} checkBox ></BookItem>)
                        }
                    </div>
                    <div className="confirm_cart">
                        <span> Precio total: $ {totalPrice}</span>
                        {cartList.length > 0 && <Button handlerClick={handleConfirmBuy}>Ir a Pagar ({cartList.length})</Button>}
                    </div>
                </div>
            ) : (
                <div className='cart_container'>
                    <Button handlerClick={() => navigate('/Login')}>Iniciar Sesion</Button>
                </div>
            )}
            <Nav />
        </>

    )
}
