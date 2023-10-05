import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserListItem.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function UserListItem({ username, icon }) {
    const handlerClick = () =>{
        
    } 

    return (
        <div className='user_list_item_container'>
            <span className='username_user_list'>{username}</span>
            <div className='icon_username_user_list'>{icon}</div>
        </div>
    );
}