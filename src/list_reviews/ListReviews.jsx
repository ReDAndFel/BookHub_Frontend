import { useEffect, useState } from 'react';
import './listReviews.css'
import ReviewItem from '../review_item/ReviewItem';
import { useReview } from '../hooks/useReview';

export default function listReviews({idBook}){

    const {reviewListBook,getReviewsBook} = useReview();

    useEffect(() => {
        getReviewsBook(idBook)
    },[]);

    return(
        <div className='reviews_info_book'>
            {reviewListBook.map((userReview) => <div key={userReview.id} className='review_container'> <ReviewItem username={userReview.username} puntuation={userReview.puntuation} date={userReview.date} review={userReview.review} /></div>)}
        </div>
        
    );

}