import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import Header from '../header/Header';
import Searcher from '../searcher/Searcher';
import UserListItem from '../user_list_item/UserListItem';
import './Friends.css'
import { useAuth } from '../AuthContext';
import { useEffect, useState } from 'react';
import { useUser } from '../hooks/useUser';

export default function Friends() {

    const { token } = useAuth();
    const { listUsers, getFriends } = useUser();

    const [idUser, setIdUser] = useState('');
   
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
                <Searcher placeholder={'Buscar amigo...'} />

                <Button handlerClick={handlerAddFriend}>Buscar Nuevos Amigos</Button>

                <div className='friends_list_container'>
                    {listUsers.map((friend) => <UserListItem key={friend.idUser} idUser={friend.idUser} username={friend.username} />)}
                </div>

            </div>
        </>
    );
}