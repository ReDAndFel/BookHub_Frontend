import { useNavigate } from "react-router-dom";
import Nav from "../nav/Nav";
import Header from "../header/Header";
import './Account.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCircleUser, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import Button from "../button/Button";

export default function Account() {


    const { token } = useAuth();

    const [idUser, setIdUser] = useState('');
    const [isLoged, setIsLoged] = useState(false);
    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    const handleClick = (event) => {
        navigate(`/${(event.currentTarget.id)}/${idUser}`);
    };


    useEffect(() => {

        if (token.idUser != "") {
            setIdUser(token.idUser);
            setIsLoged(true)
            setUsername(token.username)
        }

    }, [])
    
    return (
        isLoged ? (
            <>        
            <Header>
                <div className="account_user_profile" id="Perfil">
                    <FontAwesomeIcon className="icon_account" icon={faCircleUser} />
                    <h2>{username}</h2>
                </div>
            </Header>

            <div className='account_container'>


                <div className="account_items_container" >
                    <div className="account_item" id="Libreria" onClick={handleClick}>
                        <FontAwesomeIcon icon={faBook} />
                        <span className="text_account_item">Mi Libreria</span>
                    </div>
                    <div className="account_item" id="Metodos_de_pago" onClick={handleClick}>
                        <FontAwesomeIcon icon={faCreditCard} />
                        <span className="text_account_item">Metodos de Pago</span>
                    </div>
                    <div className="account_item" id="Amigos" onClick={handleClick}>
                        <FontAwesomeIcon icon={faUser} />
                        <span className="text_account_item">Amigos</span>
                    </div>
                    <div className="account_item" id="Favoritos" onClick={handleClick}>
                        <FontAwesomeIcon icon={faHeart} />
                        <span className="text_account_item">Favoritos</span>
                    </div>
                </div>
            </div>
            <Nav />
        </>
        ):(
            <>        
            <Header>
                <div className="account_user_profile" id="Perfil">
                    <FontAwesomeIcon className="icon_account" icon={faCircleUser} />
                </div>
            </Header>

            <div className='account_container'>

                <div className="account_items_container" >
                    <Button handlerClick={() => navigate('/Login')}>Iniciar Sesion</Button>
                </div>
            </div>
            <Nav />
        </>
        )
        

    )
}