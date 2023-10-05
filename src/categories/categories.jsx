import Nav from "../nav/Nav";
import Header from "../header/Header";
import Searcher from "../searcher/Searcher";
import './Categories.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faDragon, faFaceGrinHearts, faGlobe, faHeart, faSkull, faUserSecret } from "@fortawesome/free-solid-svg-icons";

export default function Categories() {

    const navigate = useNavigate();
    const handleClick = (category) => {
        navigate(`/Inicio/Category/${category}`)
    }

    return (
        <>
            <Header goBack = {false} > Categorias </Header>
            <div className='categories_container'>
                <Searcher />

                <div className="categories_item" id="horror" onClick={() => handleClick('Terror')}>
                    <FontAwesomeIcon icon={faSkull} />
                    Terror
                </div>

                <div className="categories_item" id="education" onClick={() => handleClick('Educacion')}>
                    <FontAwesomeIcon icon={faBook} />
                    Educacion
                </div>

                <div className="categories_item" id="history" onClick={() => handleClick('Historia')}>
                    <FontAwesomeIcon icon={faGlobe} />
                    Historia
                </div>

                <div className="categories_item" id="romance" onClick={() => handleClick('Romance')}>
                    <FontAwesomeIcon icon={faFaceGrinHearts} />
                    Romance
                </div>

                <div className="categories_item" id="health" onClick={() => handleClick('Salud y cuidado')}>
                    <FontAwesomeIcon icon={faHeart} />
                    Salud y cuidado
                </div>

                <div className="categories_item" id="fantasy" onClick={() => handleClick('Fantasia')}>
                    <FontAwesomeIcon icon={faDragon} />
                    Fantasia
                </div>

                <div className="categories_item" id="mistery" onClick={() => handleClick('Misterio')}>
                    <FontAwesomeIcon icon={faUserSecret} />
                    Misterio
                </div>

            </div>
            <Nav />
        </>


    )
}
