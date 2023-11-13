import { useState } from "react";
import listReviews from "../list_reviews/ListReviews";

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

    const handleAddReview = async (review) => {
        console.log(`Resenia de addReview`)
        console.log(review)
        try {
            const response = await fetch(`${apiUrl}/reseniar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(review),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }        
            setReviewListBook([...reviewListBook, review]);
        } catch (error) {
            console.error('Error en la solicitud http:', error);
        }
        setReview({})
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

                setReviewListBook(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }


    return { review, reviewListBook, handleAddReview,handleChangeReview, getReviewsBook }
} 