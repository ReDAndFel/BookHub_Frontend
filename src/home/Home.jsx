import { useEffect, useState } from "react";
import ListBook from "../list_book/ListBook";
import NavMod from "../nav-mod/NavMod";
import Nav from "../nav/Nav";
import Searcher from "../searcher/Searcher";
import SortButton from "../sort_button/SortButton";
import './Home.css'
import { useAuth } from "../AuthContext";
import { useUser } from "../hooks/useUser";
import { useBook } from "../hooks/useBook";

export default function Home() {

    const { token } = useAuth();
    const { isMod, validateMod } = useUser();
    const {listBooks,initiaList,setListBooks,getAllAprovedBooks,getBooksByPrice} = useBook()    
    const [idUser, setIdUser] = useState('');
    const [isLoged, setIsLoged] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            await getAllAprovedBooks();
            console.log(token);
            setIdUser(token.idUser);
            setIsLoged(true);
            validateMod(token.rol);
        };    
        fetchData();
    }, []);     
    

    return (
        <>
            <div className='home_container'>
                <h1>BookHub</h1>
                <Searcher placeholder="Buscar..." />
                <SortButton initialList={initiaList} setListInitial = {setListBooks} getBooksByPrice ={getBooksByPrice} />
                <ListBook list={listBooks} />
            </div>
            {isMod ? <NavMod /> : <Nav />}
        </>
    )
}
