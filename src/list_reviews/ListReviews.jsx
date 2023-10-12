import { useEffect, useState } from 'react';
import './listReviews.css'
import ReviewItem from '../review_item/ReviewItem';

export default function listReviews({idBook}){

    const [listReviews,setListReviews] = useState([]);

    useEffect(() => {
        const listBookReviews = [
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
    
        ]
        setListReviews(listBookReviews)
    },[]);

    return(
        <div className='reviews_info_book'>
            {listReviews.map((userReview) => <div className='review_container'> <ReviewItem key={userReview.id} username={userReview.username} puntuation={userReview.puntuation} date={userReview.date} review={userReview.review} /></div>)}
        </div>
        
    );

}