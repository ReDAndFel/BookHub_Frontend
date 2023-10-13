import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserListItem.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function UserListItem({ idUser ,username }) {
    
    const navigate = useNavigate();

    const handlerClick = () =>{
        navigate(`/Perfil/${idUser}`)
    } 

    return (
        <div className='user_list_item_container' onClick={handlerClick}>
            <span className='username_user_list'>{username}</span>
        </div>
    );
}