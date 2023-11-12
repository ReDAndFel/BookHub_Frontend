import { useState } from "react";

const reviewDto = {
    idUser: '',
    idBook: '',
    puntuation: 0,
    review: ''
}

export const useReview = () => {
    const apiUrl = "http://localhost:8080/api/resenia"
    const [review, setReview] = useState(reviewDto);
    const [reviewListBook, setReviewListBook] = useState([]);

    const handleChangeReview = (e) => {
        const { name, value } = e.target;
        setReview({ ...review, [name]: value });
    }

    const handleAddReview = (idBook, idUser) => {
        let newReview = { ...review }
        newReview.idBook = idBook;
        newReview.idUser = idUser;
        console.log(newReview); //funcion de agregar en la base de datos la funcion
    }

    const getReviewsBook = (idBook) => {

        fetch(`${apiUrl}/obtener_resenias_libro/${idBook}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data.response)
                setReviewListBook(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    return { review, reviewListBook, handleChangeReview, handleAddReview, getReviewsBook }
} 