import ListBook from "../list_book/ListBook";
import Header from "../header/Header";
import Searcher from "../searcher/Searcher";
import './Search.css'
import { useParams } from "react-router-dom";
import { useBook } from "../hooks/useBook";
import { useEffect } from "react";
import { useCategory } from "../hooks/useCategory";

export default function Search() {
    let { filter, value } = useParams();
    const { listBooks, getBooksByTitle, getBookByCategory } = useBook();

    useEffect(() => {
        const fetchData = async () => {
            if (filter === "Titulo") await getBooksByTitle(value);
            if (filter === "Categoria") await getBookByCategory(value);            
        };
        fetchData();
    }, [filter, value]);

    return (
        <>
            <Header goBack goBackNavigate={"/Inicio"}>Buscador</Header>
            <div className='search_container'>
                <Searcher placeholder="Buscar..." />
                <ListBook list={listBooks} />
            </div>
        </>
    )
}
