import Header from '../header/Header';
import Nav from '../nav/Nav';
import PaymentMethodItem from '../payment_method_item/PaymentMethodItem';
import './PaymentMethod.css'

export default function PaymentMethod() {
    return (
        <>
            <Header goBack> Mis Metodos de Pago</Header>
            <div className='payment_method_container'>
                <div className='payment_methods_container'>

                    <PaymentMethodItem numberCard='1234-123123-123312' />
                    <PaymentMethodItem numberCard='1234-123123-123312' />

                </div>
                <div className='button_payment_method'>
                    Agregar Nuevo Metodo de Pago
                </div>
            </div>
        </>
    );
}