import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import Header from '../header/Header';
import Searcher from '../searcher/Searcher';
import UserListItem from '../user_list_item/UserListItem';
import './Friends.css'

export default function Friends() {

    const navigate = useNavigate();

    const handlerDeleteFriend = () => {

    }
   
    const handlerAddFriend = () => {
        navigate('/Agregar_amigo/idUser');
    }

    const iconDeleteFriend = <Button handlerClick={handlerDeleteFriend}> Eliminar</Button>

    return (
        <>
            <Header goBack> Mis Amigos</Header>
            <div className='friends_container'>
                <Searcher placeholder={'Buscar amigo...'}/>
                <div className='icon_add_friend'>
                    <Button handlerClick={handlerAddFriend}>Añadir Amigo</Button>
                </div>

                <div className='friends_list_container'>
                    <UserListItem username="Carlos1023" icon={iconDeleteFriend} />
                    <UserListItem username="Marcelo11" icon={iconDeleteFriend} />
                </div>

            </div>
        </>
    );
}