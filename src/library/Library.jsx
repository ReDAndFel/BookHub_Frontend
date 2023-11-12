import { useParams } from "react-router-dom";
import CardBook from "../card_book/CardBook";
import Searcher from "../searcher/Searcher";
import './Library.css'
import Nav from "../nav/Nav";
import Header from "../header/Header";
import ListBook from "../list_book/ListBook";
import { useBook } from "../hooks/useBook";
import { useEffect } from "react";

export default function Library() {

    const {library,getLibrary} = useBook()
    const params = useParams(); 

    useEffect(() => {
        const fetchData = async () => {
            await getLibrary(params.idUser);
        };    
        fetchData();
    }, []);    
    
    return (
        <>
            <Header goBack goBackNavigate={"/Cuenta"} >Librería</Header>
            <div className="library_container">
                <ListBook list={library}/>
            </div>
        </>
    );
}