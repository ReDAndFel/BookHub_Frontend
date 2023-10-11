import ListBook from "../list_book/ListBook";
import Nav from "../nav/Nav";
import Searcher from "../searcher/Searcher";
import SortButton from "../sort_button/SortButton";
import './Home.css'

export default function Home() {
    return (
        <>
            <div className='home_container'>
                <h1>BookHub</h1>
                <Searcher placeholder="Buscar..." />
                <SortButton />
                <ListBook />
            </div>
            <Nav />
        </>
    )
}
