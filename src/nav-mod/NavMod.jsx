import { NavLink } from "react-router-dom";
import './NavMod.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faListUl, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavMod() {
    return (
        <nav className='nav_mod'>
            <div className="group_icon_nav_mod">
                <NavLink to='/Inicio'><div className="icon_nav_mod_container"><FontAwesomeIcon className="icon_nav_mod" icon={faListUl} /><span className="text_icon_nav_mod">Por Revisar</span></div></NavLink>
            </div>
            <div className="group_icon_nav_mod">
                <NavLink to='/Inicio'><div className="icon_nav_mod_container"><FontAwesomeIcon className="icon_nav_mod" icon={faListCheck} /><span className="text_icon_nav_mod">Autorizados</span></div></NavLink>
            </div>
            <div className="group_icon_nav_mod">
                <NavLink to='/Inicio'><div className="icon_nav_mod_container"><FontAwesomeIcon className="icon_nav_mod" icon={faRectangleXmark} /><span className="text_icon_nav_mod">Denegados</span></div></NavLink>
            </div>            


        </nav>
    )
}
