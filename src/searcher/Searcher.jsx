import { useState } from "react";
import './Searcher.css'
import { useNavigate } from "react-router-dom";

export default function Searcher({placeholder}) {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {        
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {   
        e.preventDefault();     
        navigate(`/Search/${search}`);
    }

    return(
        <form onSubmit={handleSubmit} className="searcher">
            <input className="textfield" type="text" placeholder={placeholder} name="search" id="search" value={search} onChange={handleChange} autoComplete="off" />
        </form>
    );

}