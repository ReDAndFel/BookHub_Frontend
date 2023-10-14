import { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import Header from '../header/Header';
import Nav from '../nav/Nav';
import PaymentMethodItem from '../payment_method_item/PaymentMethodItem';
import './PaymentMethod.css'
import { useNavigate } from 'react-router-dom';
import { usePaymentMethod } from '../hooks/usePaymentMethod';
import Button from '../button/Button';

export default function PaymentMethod() {

    const { token } = useAuth();
    const {listPaymentMethods,getPaymentMethods,handleDeletePaymentMethod,handleAddPaymentMethod} = usePaymentMethod();

    const [idUser, setIdUser] = useState('');
   
    const navigate = useNavigate();   

    const handleClickAddPaymentMethod = () =>{
       navigate('/Info_metodo_de_pago/')
    }

    const handleClickDeletePaymentMethod = (idPaymenMethod) =>{
        handleDeletePaymentMethod(token.idUser, idPaymenMethod);
    }

    useEffect(() => {

        if (token.idUser != "") {
            getPaymentMethods(token.idUser)
        }

    }, [])


    return (
        <>
            <Header goBack> Mis Metodos de Pago</Header>
            <div className='payment_method_container'>
                <div className='payment_methods_container'>
                    {listPaymentMethods.map((paymentMethod) => <PaymentMethodItem  key={paymentMethod.id} idPaymentMethod={paymentMethod.id} cardNumer={paymentMethod.cardNumber} handleClickDelete={handleClickDeletePaymentMethod}/>)}
                </div>
                <div className='button_payment_method'>
                    <Button handlerClick={handleClickAddPaymentMethod}> Añadir Metodo de Pago</Button>
                </div>
            </div>
        </>
    );
}