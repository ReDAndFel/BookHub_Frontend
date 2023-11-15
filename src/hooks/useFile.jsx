import { useState } from "react"

const fileDTO = {
    id: "",
    url: ""
}

export const useFile = () => {

    const [file, setFile] = useState(fileDTO)
    const [image, setImage] = useState(fileDTO)

    const apiUrl = 'http://localhost:8080/api/archivo'

    const uploadFile = async (file) => {
        try {
            const response = await fetch(`${apiUrl}/subir_archivo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(file),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setFile(data.response);

            if (data.error) {
                throw new Error(`Error en la autenticación: ${data.message}`);
            }
        } catch (error) {
            console.error('Error en la solicitud http:', error);
        }
    }

    const uploadImage = async (image) => {
        try {
            const response = await fetch(`${apiUrl}/subir_imagen`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(image),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setImage(data.response);

            if (data.error) {
                throw new Error(`Error en la autenticación: ${data.message}`);
            }
        } catch (error) {
            console.error('Error en la solicitud http:', error);
        }
    }

    return {
        uploadFile, uploadImage, file,image
    }
}