import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "./useForm";
import { useAuth } from "../AuthContext";

const sesionDto = {
    email: '',
    password: '',
}

export const useSesion = () => {

    const [sesion, setSesion] = useState(sesionDto);
    const [isLoged, setIsLoged] = useState(false);

    const { setToken } = useAuth();

    const navigate = useNavigate();

    const handleLogin = (formLogin) => {
        setSesion(formLogin); // metodo de iniciar sesion y obtener el token
        console.log(formLogin)

        let tokenSesion = {
            idUser: "1004684293",
            rol: 'USER'
        }
        
        setToken(tokenSesion)
        navigate('/Inicio');
    }


    const validateLoged = () => {
        if (token.idUser != '') {
            setIsLoged(true)
        }
    }

    const handleLogout = () => {

    }

    return { isLoged, handleLogin, handleLogout, validateLoged }
}