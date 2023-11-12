import { useNavigate } from 'react-router-dom';
import './Header.css'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header({children ,goBack, goBackNavigate}) {

    const navigate = useNavigate();
    
    const handlerClick = () =>{
        navigate(goBackNavigate)
    }

    return (
        <>
            <div className='header_container'>
                {goBack && <span onClick={handlerClick}>{<FontAwesomeIcon icon={faChevronLeft} />}</span>}
                <span>{children}</span>
            </div>
        </>
    );
}