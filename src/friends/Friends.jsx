import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import Header from '../header/Header';
import UserListItem from '../user_list_item/UserListItem';
import './Friends.css'
import { useAuth } from '../AuthContext';
import { useEffect } from 'react';
import { useUser } from '../hooks/useUser';

export default function Friends() {

    const { token } = useAuth();
    const { listFriends, getFriends } = useUser();
   
    const navigate = useNavigate();

    const handlerAddFriend = () => {
        navigate('/Nuevos_amigos');
    }

    useEffect(() => {

        if (token.idUser != "") {
            getFriends(token.idUser)
        }

    }, [])

    return (
        <>
            <Header goBack goBackNavigate={"/Cuenta"}> Mis Amigos</Header>
            <div className='friends_container'>
                <Button handlerClick={handlerAddFriend}>Buscar Nuevos Amigos</Button>

                <div className='friends_list_container'>
                    {listFriends.map((friend) => <UserListItem key={friend.id} idUser={friend.id} username={friend.username} />)}
                </div>

            </div>
        </>
    );
}