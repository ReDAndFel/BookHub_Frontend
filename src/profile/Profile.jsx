import './Profile.css'

import Header from '../header/Header';
import Button from '../button/Button';
import { useUser } from '../hooks/useUser';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

export default function Profile() {

    const { idUser } = useParams();
    const { getUser, user ,isFriend, handlerAddFriend} = useUser();
    const { token } = useAuth();

    const [idUserToken, setIdUserToken] = useState('');
    const [isLoged, setIsLoged] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        getUser(idUser)
        if (token.idUser != "") {
            setIdUserToken(token.idUser);
            setIsLoged(true)
        }
    }, []);

    const handleClickAddFriend = () =>{
        handlerAddFriend(idUserToken)
    }

    const handlerUpdateInfo = () =>{
       navigate(`/Actualizar_informacion`)
    }

    return (
        <>
            <Header goBack> Perfil</Header>
            <div className='profile_container'>
                <div className="profile_header">
                    <FontAwesomeIcon className="profile_icon" icon={faCircleUser} />
                    <h2>{user.username}</h2>
                </div>
                {idUserToken != user.id  && isLoged && <Button handlerClick={handleClickAddFriend}>{!isFriend ? 'Agregar a Amigos' : 'Eliminar de Amigos'}</Button>}
                {idUserToken == user.id  && isLoged && <Button handlerClick={handlerUpdateInfo}>Actualizar Informacion</Button>}
                <div className='info_profile_container'>
                    <span className='info_profile'>{`Nombre: ${user.firstName}`}</span>
                    <span className='info_profile'>{`Apellido: ${user.lastName}`}</span>
                    <span className='info_profile'>{`Correo: ${user.email}`}</span>
                    <span className='info_profile'>{`Telefono: ${user.phone}`}</span>
                    <span className='info_profile'>{`Dirección: ${user.address}`}</span>
                </div>

            </div>
        </>
    )
}