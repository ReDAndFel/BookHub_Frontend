import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PaymentMethodItem.css'
import { faCreditCard, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function PaymentMethodItem({ idPaymentMethod,cardNumer,handleClickDelete }) {

    const handleClick = () => {
        navigate(`/Info_metodo_de_pago/${idPaymentMethod}`);
    }

    const navigate = useNavigate();  
    

    return (
        <div className='payment_method_item_container'>
            <span className='number_card' onClick={handleClick}><FontAwesomeIcon icon={faCreditCard} /> {cardNumer}</span>
            <FontAwesomeIcon className='icon_item_payment_method' icon={faTrash} onClick={() => handleClickDelete(idPaymentMethod)} />
        </div>
    );
}