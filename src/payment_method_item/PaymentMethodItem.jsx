import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PaymentMethodItem.css'
import { faCreditCard, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function PaymentMethodItem({ numberCard }) {
    const handlerClick = () =>{
        
    } 

    return (
        <div className='payment_method_item_container'>
            <span className='number_card'><FontAwesomeIcon icon={faCreditCard} /> {numberCard}</span>
            <FontAwesomeIcon className='icon_item_payment_method' icon={faTrash} onClick={handlerClick} />
        </div>
    );
}