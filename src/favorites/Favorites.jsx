import { useEffect, useState } from 'react';
import Header from '../header/Header';
import ListBook from '../list_book/ListBook';

import Searcher from '../searcher/Searcher';
import SortButton from '../sort_button/SortButton';
import './Favorites.css'
import { useBook } from '../hooks/useBook';
import { useAuth } from '../AuthContext';

export default function Favorites() {

    const { favoriteList, getFavoriteBooks } = useBook()
    const { token } = useAuth();

    useEffect(() => {
        if (token.idUser != "") {
            getFavoriteBooks(token.idUser)
        } else {
            navigate(`/Login`)
        }
    }, []);

    return (
        <>
            <Header goBack goBackNavigate={"/Cuenta"}> Mis Favoritos</Header>
            <div className='favorites_container'>
                <ListBook list={favoriteList} />
            </div>
        </>
    );
}