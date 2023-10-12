import { useState } from "react";

const reviewDto = {
    idUser: '',
    idBook: '',
    puntuation: 0,
    review: ''
}

export const useReview = () =>{
    const [review, setReview] = useState(reviewDto);
    const [reviewListBook, setReviewListBook] = useState([]);

    const handleChangeReview = (e) => {
        const { name, value } = e.target;
        setReview({ ...review, [name]: value });
    }

    const handleAddReview = (idBook, idUser) => {
        let newReview =  {...review}
        newReview.idBook = idBook;
        newReview.idUser = idUser;
        console.log(newReview); //funcion de agregar en la base de datos la funcion
    }

    const getReviewsBook = (idBook) =>{
        
        const listReviews = [
            {
                id: 1,
                username: 'Mario0123',
                date: '10-02-2022',
                puntuation: 5,
                review: 'Buen libro'
            },
            {
                id: 2,
                username: 'Alex123',
                date: '10-04-2022',
                puntuation: 4,
                review: 'Muy buena trama, pero podria ser mejor'
            },
            {
                id: 3,
                username: 'Maria',
                date: '10-04-2022',
                puntuation: 1,
                review: 'Aburridisimo.'
            },
            {
                id: 4,
                username: 'Marsha11',
                date: '10-10-2022',
                puntuation: 5,
                review: 'Una obra de arte'
            },    
        ] //funcion de busqueda de reviews por idBook
        setReviewListBook(listReviews)
    }

    return{review,reviewListBook,handleChangeReview,handleAddReview,getReviewsBook}
} 