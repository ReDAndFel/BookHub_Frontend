import { useState } from "react";

export function useCategory() {

    const apiUrl = "http://localhost:8080/api/categorias"

    const [listCategory, setListCategory] = useState([]);

    const getCategories = () => {
        fetch(`${apiUrl}/obtener`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data.response)
                setListCategory(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    return { listCategory, getCategories };
}