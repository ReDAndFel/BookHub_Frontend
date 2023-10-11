import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ReviewItem.css'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import StarsPuntuation from '../stars_puntuation/StarsPuntuation';

export default function ReviewItem({ username, puntuation, date, review }) {
    return (
        <div className='review_item_container'>
            <div className='review_item_header'>
            <FontAwesomeIcon className='icon_review' icon={faUser} />
            <span>{username}</span>
            </div>
            <div className='review_item_subheader'>
                <StarsPuntuation puntuation={puntuation}/>
                <span>{date}</span>
            </div>
            <p>{review}</p>
        </div>
    );
}