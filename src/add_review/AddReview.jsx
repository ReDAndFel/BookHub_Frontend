import { useState } from 'react';
import './AddReview.css'
import ButtonSubmit from '../button_submit/ButtonSubmit';

const reviewInitial = {
    idUser: '',
    idBook: '',
    puntuation: 0,
    review: ''
}

export default function AddReview({idUser,idBook}) {

    const [review, setReview] = useState(reviewInitial);

    const handleChangeReview = (e) => {
        const { name, value } = e.target;
        setReview({ ...review, [name]: value });
    }

    const handleSubmitReview = (e) => {
        e.preventDefault();
        review.idBook = idBook;
        review.idUser = idUser;
        console.log(review);
    }
    return (
        <form className='form_review' onSubmit={handleSubmitReview}>
            <span>Escribe una Reseña</span>
            <textarea name="review" id="textarea_review" value={review.review} onChange={handleChangeReview} ></textarea>
            <span>Puntuacion:</span>
            <select value={review.puntuation} onChange={handleChangeReview} name="puntuation" id="puntuation_review">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <ButtonSubmit>Publicar Reseña</ButtonSubmit>
        </form>
    );
}