import { useState } from "react";
import { useSesion } from "./useSesion";

const userDto = {
    id: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    rol: ''
}

export const useUser = () => {
    const [user, setUser] = useState(userDto);
    const [isMod, setIsMod] = useState(false);
    const [isFriend, setIsFriend] = useState(false);
    const [listUsers, setListUsers] = useState([]);

    const handleSignup = (formSignin) => {

        setUser(formSignin); // metodo de iniciar sesion y obtener el token
        console.log(formSignin)
    }

    const getUsers = () => {
        let listUsers = [
            {
                idUser: '4',
                username: 'Alex0123'
            },
            {
                idUser: '5',
                username: 'Samanta52'
            },
            {
                idUser: '6',
                username: 'JulianAcost'
            },
            {
                idUser: '7',
                username: 'Andrea Bravo'
            },
            {
                idUser: '8',
                username: 'Marceli12'
            },
            {
                idUser: '9',
                username: 'VivaColombia123'
            },
            {
                idUser: '10',
                username: 'reeper'
            }

        ]

        setListUsers(listUsers)
    }

    const getFriends = (idUser) => {
        let listFriendsUser = [
            {
                idUser: '1',
                username: 'Andres12'
            },
            {
                idUser: '2',
                username: 'Maria120'
            }
        ] //metodo de obtener la lista de amigos del user
        setListUsers(listFriendsUser)
    }

    const getUser = (idUser) => {
        let userFound = {
            id: '1004684293',
            username: 'Maria',
            email: 'maria@qweqw',
            password: '',
            confirmPassword: '',
            firstName: 'Maria',
            lastName: 'Cardona',
            phone: '32312412',
            address: 'Calle 12-30',
            rol: 'USER'
        } //funcion de obtener un user

        setUser(userFound);
    }

    const validateMod = (rol) => {
        if (rol == "MODERATOR") setIsMod(true)
    }

    const handlerAddFriend = (idUserToken,idUser) => {
        if (isFriend) {
            console.log(`El usuario ${user.username} fue eliminado de la lista de amigos del usuario con id ${idUserToken}`)
        } else {
            console.log(`El usuario ${user.username} fue agregado a la lista de amigos del usuario con id ${idUserToken}`)
        }
        setIsFriend(!isFriend)
    }

    const handleUpdateUser = (idUserToken, updatedUser) => {
        console.log(`Se actualizó el usuario con el id ${idUserToken}`)
        setUser(updatedUser); // metodo de actualizar usuario
        console.log(updatedUser)
    }

    return { getUser, user, listUsers, isMod, isFriend, handlerAddFriend, handleUpdateUser, handleSignup, validateMod, getUsers, getFriends }
}