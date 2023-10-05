import Header from '../header/Header';
import ListBook from '../list_book/ListBook';
import Nav from '../nav/Nav';
import Searcher from '../searcher/Searcher';
import './Favorites.css'

export default function Favorites() {
    return (
        <>
            <Header goBack> Mis Favoritos</Header>
            <div className='favorites_container'>
                <Searcher placeholder="Buscar..." />
                <ListBook />
            </div>
        </>
    );
}