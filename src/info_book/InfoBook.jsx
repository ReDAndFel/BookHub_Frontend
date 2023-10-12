import { useNavigate, useParams } from 'react-router-dom';
import Header from '../header/Header';
import './InfoBook.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../button/Button';
import ListReviews from '../list_reviews/ListReviews';
import { useEffect, useState } from 'react';
import { useBook } from "../hooks/useBook";
import AddReview from '../add_review/AddReview';
import { useUser } from '../hooks/useUser';
import { useAuth } from '../AuthContext';


const userInitial = {
    id: '12341',
    username: 'Maria',
    email: 'maria@qweqw',
    password: '',
    confirmPassword: '',
    firstName:'Maria',
    lastName: 'Cardona',
    phone: '32312412',
    address: 'Calle 12-30',
    rol:'USER'
}

export default function InfoBook() {

    let { idBook } = useParams();
    const [idUser,setIdUser] = useState('');    
    const [isLoged, setIsLoged] = useState(false);

    const { book,isFavorite,isBought,handleAddCart, handleLogin, handleRead, handleFavorite, handleChangeBook,handleChangeAvailable, loadBook } = useBook();
    const {isMod,validateMod} = useUser();
    const { token } = useAuth();

    const navigate = useNavigate();   

    useEffect(() => {        
        
        loadBook(idBook)  

        if(token.idUser != "") {
            setIdUser(token.idUser);
            setIsLoged(true)
            validateMod(token.rol)
        }   

    }, [])

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

                {isMod && (
                    <div className='mod_select_info_book'>
                        <span>Seleccione un Estado:</span>
                        <select value={book.available} onChange={handleChangeBook} name="available" id="available_info_book">
                            <option value={true}>Disponible</option>
                            <option value={false}>No Disponible</option>
                        </select>
                        <Button handlerClick={handleChangeAvailable}>Guardar Estado</Button>
                    </div>
                )}

                {!isLoged && <Button handlerClick={handleLogin} >Iniciar Sesion</Button>}

                {isLoged && !isMod && (
                    <div className='buttons_info_book'>
                        {isBought ? <Button handlerClick={handleRead}>Leer</Button> : <Button handlerClick={handleAddCart}>Añadir al Carro</Button>}
                        <FontAwesomeIcon onClick={handleFavorite} className={`favorite_button ${isFavorite && 'favorite'}`} icon={isFavorite ? solidHeart : regularHeart} />
                    </div>
                )}

                {isLoged && (
                    <div className='review_info_book_container'>
                        {!isMod && <AddReview idBook={book.id} idUser={idUser} />}
                        <ListReviews idBook={idBook} />
                    </div>
                )}

            </div>
        </>
    );
}