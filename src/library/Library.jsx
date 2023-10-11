import { useParams } from "react-router-dom";
import CardBook from "../card_book/CardBook";
import Searcher from "../searcher/Searcher";
import './Library.css'
import Nav from "../nav/Nav";
import Header from "../header/Header";
import ListBook from "../list_book/ListBook";
import SortButton from "../sort_button/SortButton";

export default function Library() {

    const params = useParams();
    return (
        <>
            <Header goBack >Librería</Header>
            <div className="library_container">
                <Searcher placeholder="Buscar..." />
                <SortButton />
                <ListBook />
            </div>
        </>
    );
}