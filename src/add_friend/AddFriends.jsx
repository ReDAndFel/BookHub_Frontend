import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import Header from '../header/Header';
import Searcher from '../searcher/Searcher';
import UserListItem from '../user_list_item/UserListItem';
import './AddFriends.css'
import { useAuth } from '../AuthContext';
import { useUser } from '../hooks/useUser';
import { useEffect, useState } from 'react';

export default function AddFriends() {

    const { token } = useAuth();
    const { listUsers, getUsers } = useUser();

    const [idUser, setIdUser] = useState('');
    const [isLoged, setIsLoged] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {

        if (token.idUser != "") {
            getUsers(token.idUser)
        }

    }, [])

    return (
        <>
            <Header goBack> Buscar Nuevos Amigos</Header>
            <div className='add_friends_container'>
                <Searcher placeholder={'Buscar usuario...'} />
                <div className='user_list_container'>
                    {listUsers.map((user) => <UserListItem key={user.idUser} idUser={user.idUser} username={user.username} />)}
                </div>

            </div>
        </>
    );
}