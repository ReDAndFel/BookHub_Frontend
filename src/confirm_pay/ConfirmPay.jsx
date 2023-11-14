import { useEffect, useState } from "react"
import { useTransaction } from "../hooks/useTransaction"
import "./ConfirmPay.css"
import { useAuth } from "../AuthContext"
import Header from "../header/Header"
import BookItem from "../book_item/BookItem"
import Button from "../button/Button"
import { useNavigate } from "react-router-dom"
import { usePaymentMethod } from "../hooks/usePaymentMethod"
import { useCart } from "../hooks/useCart"

export default function ConfirmPay() {

    const { transaction, confirmTransaction } = useTransaction();
    const [totalPrice, setTotalPrice] = useState(0);
    const { token } = useAuth();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
    const { listPaymentMethods, getPaymentMethods } = usePaymentMethod();
    const navigate = useNavigate();
    const { cartList } = useCart();


    const handleConfirmPay = () => {

        const updatedTransaction = { ...transaction };

        // Mapear cartList para cambiar 'id' a 'idBook'
        const mappedCartList = cartList.map((book) => ({
            idBook: book.id,
            image: book.image,
            title: book.title,
            autor: book.autor,
            editorial: book.editorial,
            file: book.file,
            idCategory: book.idCategory,
            idStateBook: book.idStateBook,
            idUser: book.idUser,
            price: book.price,
            puntuation: book.puntuation,
            realeaseDate: book.realeaseDate,
            sinopsis: book.sinopsis,
        }));

        updatedTransaction.transactionDetailDTOS = mappedCartList;
        updatedTransaction.idUser = token.idUser;
        updatedTransaction.idPaymentMethod = parseInt(selectedPaymentMethod);

        console.log(updatedTransaction);

        confirmTransaction(updatedTransaction);
        navigate("/Inicio");
    }

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };
    useEffect(() => {
        if (token.idUser != "") {
            getPaymentMethods(token.idUser);

        } else {
            navigate("/Login")
        }
    }, []);

    useEffect(() => {
        const total = cartList.reduce((sum, book) => sum + book.price, 0);
        setTotalPrice(total);
    }, [cartList]);

    return (
        <>
            <Header goBack goBackNavigate={"/Carrito"}>Confirmar pago</Header>

            <div className='confirm_pay_container'>

                <div className="confirm_pay_list_container">{
                    cartList.map((book) => <BookItem key={book.id} book={book} list={[]} setList={[]} checkBox={false}></BookItem>)
                }
                </div>

                <div className="confirm_pay_payment_method_container">
                    <span>Metodo de pago</span>
                    <select value={selectedPaymentMethod} onChange={handlePaymentMethodChange}>
                        <option value="">Seleccione un metodo de pago</option>
                        {listPaymentMethods.map((paymentMethod) => (
                            <option key={paymentMethod.id} value={paymentMethod.id}>
                                {paymentMethod.cardNumber}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="confirm_pay_nav">
                    <span> Precio total: $ {totalPrice}</span>
                    <Button handlerClick={handleConfirmPay}>Confirmar Compra ({cartList.length})</Button>
                </div>
            </div >

        </>
    )
}