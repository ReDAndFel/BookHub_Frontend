import { useNavigate } from "react-router-dom";
import Nav from "../nav/Nav";
import Header from "../header/Header";
import './Account.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCircleUser, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

export default function Account() {

    const navigate = useNavigate();


    const handleClick = (event) => {
        navigate(`/${(event.currentTarget.id)}/idUSer`);
    };

    return (
        <>
            <Header>
                <div className="account_user_profile" id="Profile">
                    <FontAwesomeIcon className="icon_account" icon={faCircleUser} />
                    <h2>Username</h2>
                </div>
            </Header>

            <div className='account_container'>


                <div className="account_items_container" >
                    <div className="account_item" id="Libreria" onClick={handleClick}>
                    <FontAwesomeIcon icon={faBook} />
                        <span className="text_account_item">Mi Libreria</span>
                    </div>
                    <div className="account_item" id="PaymentMethods" onClick={handleClick}>
                    <FontAwesomeIcon icon={faCreditCard} />
                        <span className="text_account_item">Metodos de Pago</span>
                    </div>
                    <div className="account_item" id="Friends" onClick={handleClick}>
                    <FontAwesomeIcon icon={faUser} />
                        <span className="text_account_item">Amigos</span>
                    </div>
                    <div className="account_item" id="Favorites" onClick={handleClick}>
                    <FontAwesomeIcon icon={faHeart} />
                        <span className="text_account_item">Favoritos</span>
                    </div>
                </div>              
            </div>
            <Nav />
        </>

    )
}