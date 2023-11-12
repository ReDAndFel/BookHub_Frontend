import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const sesionDto = {
    email: '',
    password: '',
}

export const useSesion = () => {
    const apiUrl = "http://localhost:8080/api/autenticacion"

    const [sesion, setSesion] = useState(sesionDto);
    const [isLoged, setIsLoged] = useState(false);

    const { token, setToken } = useAuth();

    const navigate = useNavigate();

    const handleLogin = async (formLogin) => {
        try {
            const response = await fetch(`${apiUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formLogin),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
    
            if (data.error) {
                throw new Error(`Error en la autenticación: ${data.message}`);
            }

            setToken(data.response);
            navigate('/Inicio');
        } catch (error) {
            console.error('Error en la solicitud http:', error);
        }
    };


    const validateLoged = () => {
        if (token.idUser != '') {
            setIsLoged(true)
        }
    }

    const handleLogout = () => {

    }

    return { isLoged, handleLogin, handleLogout, validateLoged }
}