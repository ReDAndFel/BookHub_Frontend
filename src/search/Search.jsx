import ListBook from "../list_book/ListBook";
import Header from "../header/Header";
import Searcher from "../searcher/Searcher";
import './Search.css'
import { useParams } from "react-router-dom";
import SortButton from "../sort_button/SortButton";

export default function Search() {
    let { filter, value } = useParams();
    return (
        <>
            <Header goBack>{value}</Header>
            <div className='search_container'>
                <Searcher placeholder="Buscar..." />
                <SortButton />
                <ListBook />
            </div>
        </>
    )
}
