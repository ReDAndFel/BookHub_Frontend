import { NavLink } from "react-router-dom";
import './Nav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCirclePlus, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faRectangleList, faUser } from "@fortawesome/free-regular-svg-icons";
import { useAuth } from "../AuthContext";
import { useEffect, useState } from "react";

export default function Nav() {

    const { token } = useAuth();
    const [idUser,setIdUser] = useState(''); 

    useEffect(() => {
        if(token.idUser != ''){
            setIdUser(token.idUser);            
        }
    },[]);

    return (
        <nav className='nav'>
            <div className="group_icon_nav">
                <NavLink to='/Inicio'><div className="icon_nav_container"><FontAwesomeIcon className="icon_nav" icon={faHouse} /><span className="text_icon_nav">Inicio</span></div></NavLink>
                <NavLink to={`/Cuenta/${idUser}`}><div className="icon_nav_container"><FontAwesomeIcon className="icon_nav" icon={faUser} /><span className="text_icon_nav">Cuenta</span></div></NavLink>
            </div>

            <div className="group_icon_nav">
                <NavLink to={`/Agregar_libro/${idUser}`}><div className="plus"><FontAwesomeIcon icon={faCirclePlus} /></div></NavLink>
            </div>
            <div className="group_icon_nav">
                <NavLink to='/Categorias'><div className="icon_nav_container"><FontAwesomeIcon className="icon_nav" icon={faRectangleList} /><span className="text_icon_nav">Categorias</span></div></NavLink>
                <NavLink to={`/Carrito/${idUser}`}><div className="icon_nav_container"><FontAwesomeIcon className="icon_nav" icon={faCartShopping} /><span className="text_icon_nav">Carrito</span></div></NavLink>
            </div>



        </nav>
    )
}
