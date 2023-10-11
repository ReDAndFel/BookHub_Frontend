import { useNavigate, useParams } from 'react-router-dom';
import Header from '../header/Header';
import './InfoBook.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../button/Button';
import ReviewItem from '../review_item/ReviewItem';
import { useEffect, useState } from 'react';

export default function InfoBook() {

    let { idBook } = useParams();

    const navigate = useNavigate();

    const [isLoged, setIsLoged] = useState(false);
    const [isBought, setIsBought] = useState(false);
    const [isMod, setIsMod] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const book = {
        id: '1',
        image: 'data:image/jpeg;base64,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',
        title: 'El principito',
        autor: 'Antoine de Saint-Exupéry',
        realeaseDate: '6-04-1943',
        puntuation: 4.6,
        reviews: 300,
        price: 20.00,
        category: 'Fantasía',
        sinopsis: 'El Principito es una narración corta del escritor francés Antoine de Saint-Exupéry. La historia se centra en un pequeño  príncipe que realiza una travesía por el universo. En este viaje descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad.',
    }

    const listUsersReview = [
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

    const handleAddCart = () => {

    }

    const handleSubmitReview = () => {

    }

    const handleLogin = () => {
        navigate('/Login');
    }

    const handleRead = () => {

    }

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    useEffect(() => {
        const userIsLoggedIn = true;

        if (userIsLoggedIn) {
            setIsLoged(true);
        }
    }, [])

    useEffect(() => {
        const userIsMod = false;

        if (userIsMod) {
            setIsMod(true);
        }

    }, [isLoged])

    useEffect(() => {
        const bookIsBought = false;

        if (bookIsBought) {
            setIsBought(true);
        }

    }, [isLoged])

    useEffect(() => {
        const bookIsFavorite = false;

        if (bookIsFavorite) {
            setIsFavorite(true);
        }

    }, [isLoged])

    return (
        <>
            <Header goBack>Informacion del Libro</Header>
            <div className='info_book_container'>
                <div className='info_sup'>
                    <img src={book.image} alt={`${book.title}_portada`} />
                    <div className='info_book'>
                        <h1>{book.title}</h1>
                        <span>{book.autor}</span>
                        <span>{book.realeaseDate}</span>
                        <span>${book.puntuation} <FontAwesomeIcon className='span_white_info_book' icon={faStar} /> | {book.reviews} reseñas</span>
                        <span>$ {book.price}</span>
                    </div>
                </div>
                <span>{book.category}</span>
                <span>Sinopsis: {book.sinopsis}</span>

                {!isLoged && <Button handlerClick={handleLogin}>Iniciar Sesion</Button>}

                {isLoged && (
                    <div className='buttons_info_book'>
                        {isBought ? <Button handlerClick={handleRead}>Leer</Button> : <Button handlerClick={handleAddCart}>Añadir al Carro</Button>}
                        <FontAwesomeIcon onClick={handleFavorite} className={`favorite_button ${isFavorite && 'favorite'}`} icon={isFavorite ? solidHeart : regularHeart} />
                    </div>
                )}

                {isLoged && (
                    <div className='review_info_book_container'>
                        <form className='form_review' onSubmit={handleSubmitReview}>
                            <div>

                            </div>
                        </form>
                        <div className='reviews_info_book'>
                            {listUsersReview.map((userReview) => <div className='review_container'> <ReviewItem key={userReview.id} username={userReview.username} puntuation={userReview.puntuation} date={userReview.date} review={userReview.review} /></div>)}
                        </div>
                    </div>
                )}

            </div>
        </>
    );
}