import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import UserListItem from '../user_list_item/UserListItem';
import './AddFriends.css'
import { useAuth } from '../AuthContext';
import { useUser } from '../hooks/useUser';
import { useEffect } from 'react';

export default function AddFriends() {

    const { token } = useAuth();
    const { listUsers, getUsers } = useUser();

    const navigate = useNavigate();


    useEffect(() => {
        if (token.idUser != "") {
            getUsers()
        }else{
            navigate(`/Login`)
        }

    }, [])

    return (
        <>
            <Header goBack goBackNavigate={`/Amigos/${token.idUser}`}> Buscar Nuevos Amigos</Header>
            <div className='add_friends_container'>
                <div className='user_list_container'>
                    {listUsers.map((user) => <UserListItem key={user.id} idUser={user.id} username={user.username} />)}
                </div>

            </div>
        </>
    );
}