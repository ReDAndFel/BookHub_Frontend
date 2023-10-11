import './ListBook.css';
import CardBook from "../card_book/CardBook";
import { useNavigate } from 'react-router-dom';

export default function ListBook({list}) {
    const navigate = useNavigate();    

    const handlerClickCard = (idBook) =>{
        navigate(`/Info_Libro/${idBook}`);
      };

    return (
        <div className="list_book_container">
            {list.map((book) => <div className="book_container" onClick={() => handlerClickCard(book.id)} ><CardBook key={book.id} image={book.image} price={book.price} title={book.title}  /></div>)}
        </div>
    );
}