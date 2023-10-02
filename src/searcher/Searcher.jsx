import { useState } from "react";
import './Searcher.css'

export default function Searcher({placeholder}) {

    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        
        setSearch(e.target.value);
    }

    return(
        <form onSubmit={e => e.preventDefault()} className="searcher">
            <input className="textfield" type="text" placeholder={placeholder} name="search" id="search" value={search} onChange={handleChange} autoComplete="off" />
        </form>
    );

}