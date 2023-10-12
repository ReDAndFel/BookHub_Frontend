import { useState } from "react";
import { useSesion } from "./useSesion";

const userDto = {
    id: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName:'',
    lastName: '',
    phone: '',
    address: '',
    rol:''
}

export const useUser = () =>{
    const [user,setUser] = useState(userDto);
    const [isMod, setIsMod] = useState(false);
    
    const handleSignup = (formSignin) =>{

        setUser(formSignin); // metodo de iniciar sesion y obtener el token
        console.log(formSignin)
    } 

    const getUsers = (idUser) =>{
        let listUsers = []
        return listUsers;
    }
    const getFriends = (idUser) =>{
        let listFriendsUser = []
        return listFriendsUser;
    }
    
    const getUser = (idUser) =>{
        let userFound = {
            id: '12341',
            username: 'Maria',
            email: 'maria@qweqw',
            password: '',
            confirmPassword: '',
            firstName:'Maria',
            lastName: 'Cardona',
            phone: '32312412',
            address: 'Calle 12-30',
            rol:'USER'
        } //funcion de obtener un user

        return userFound
    }

    const validateMod = (rol) =>{          
        if(rol == "MODERATOR") setIsMod(true)
    }
    
    return{getUser,isMod,handleSignup,validateMod,getUsers,getFriends}
}