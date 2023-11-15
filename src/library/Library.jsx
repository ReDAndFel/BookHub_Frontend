import { useNavigate, useParams } from "react-router-dom";
import CardBook from "../card_book/CardBook";
import Searcher from "../searcher/Searcher";
import './Library.css'
import Nav from "../nav/Nav";
import Header from "../header/Header";
import ListBook from "../list_book/ListBook";
import { useBook } from "../hooks/useBook";
import { useEffect } from "react";
import Button from "../button/Button";
import { useAuth } from "../AuthContext";

export default function Library() {

    const {library,getLibrary} = useBook()
    const params = useParams(); 
    const {token} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {      
        if(token.idUser != ""){
            getLibrary(params.idUser);     
        } else{
            navigate("/Login")
        }               
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