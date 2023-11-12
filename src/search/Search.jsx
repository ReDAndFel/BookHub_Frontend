import ListBook from "../list_book/ListBook";
import Header from "../header/Header";
import Searcher from "../searcher/Searcher";
import './Search.css'
import { useParams } from "react-router-dom";
import SortButton from "../sort_button/SortButton";
import { useBook } from "../hooks/useBook";
import { useEffect } from "react";

export default function Search() {
    let { title } = useParams();
    const { listBooks,initiaList,setListBooks, getBooksByTitle, getBooksByPrice } = useBook()

    useEffect(() => {
        const fetchData = async () => {
            await getBooksByTitle(title);
        };
        fetchData();
    }, []);

    return (
        <>
            <Header goBack>{title}</Header>
            <div className='search_container'>
                <Searcher placeholder="Buscar..." />
                <ListBook list={listBooks} />
            </div>
        </>
    )
}
