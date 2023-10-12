
import './AddReview.css'

import { useReview } from '../hooks/useReview';
import Button from '../button/Button';

export default function AddReview({ idUser, idBook }) {

    const { review, handleChangeReview, handleAddReview } = useReview()

    return (
        <form className='form_review'>
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
            <Button handlerClick={() => handleAddReview(idBook, idUser)}>Publicar Reseña</Button>
        </form>
    );
}