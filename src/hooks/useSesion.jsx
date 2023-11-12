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

    const { token,setToken } = useAuth();

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
                // Si la respuesta no es exitosa, manejar el error
                const errorData = await response.json();

                // Aquí puedes acceder a los detalles del error devueltos por el backend
                console.error('Error al iniciar sesión:', errorData);

                // También puedes lanzar un nuevo error si lo deseas
                // throw new Error(errorData.message);

                return;
            }

            // La respuesta fue exitosa, obtener el token
            const tokenSesion = await response.json();

            // Guardar el token en el contexto de autenticación
            setToken(tokenSesion);

            // Navegar a la página de Inicio
            navigate('/Inicio');

        } catch (error) {
            // Manejar errores de red u otros errores
            console.error('Error al realizar la petición:', error.message);
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