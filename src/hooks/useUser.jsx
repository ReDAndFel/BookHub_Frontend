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
    const [listFriends, setListFriends] = useState([]);
    const apiUrl = "http://localhost:8080/api/usuario"

    const handleSignup = (formSignin) => {

        setUser(formSignin); // metodo de iniciar sesion y obtener el token
        console.log(formSignin)
    }

    const getUsers = () => {
        fetch(`${apiUrl}/obtener_usuarios`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setListUsers(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    const getIsFriendState = async (idUser) => {
        const state = listFriends.some(friend => friend.id.toString() === idUser.toString());
        setIsFriend(state);
    }

    const getFriends = (idUser) => {
        fetch(`${apiUrl}/obtener_amigos/${idUser}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setListFriends(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });

    }

    const getUser = (idUser) => {
        fetch(`${apiUrl}/obtener_usuario/${idUser}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setUser(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    const validateMod = (rol) => {
        if (rol == "MODERATOR") setIsMod(true)
    }

    const handlerAddFriend = async (idUserToken, idUser) => {
        if (!isFriend) {
            try {
                const response = await fetch(`${apiUrl}/agregar_amigo/${idUserToken}/${idUser}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error en la solicitud http:', error);
            }
        } else {
            try {
                const response = await fetch(`${apiUrl}/quitar_amigo/${idUserToken}/${idUser}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error en la solicitud http:', error);
            }
        }
        setIsFriend(!isFriend)
    }

    const handleUpdateUser = async (idUser, updatedUser) => {
        try {
            const response = await fetch(`${apiUrl}/actualizar/${idUser}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.error('Error en la solicitud http:', error);
        }
    }

    return { getUser, user, listUsers, isMod, isFriend, listFriends, getIsFriendState, handlerAddFriend, handleUpdateUser, handleSignup, validateMod, getUsers, getFriends }
}