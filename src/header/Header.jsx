import { useNavigate } from 'react-router-dom';
import './Header.css'

export default function Header({children ,goBack}) {

    const navigate = useNavigate();
    
    const handlerClick = () =>{
        navigate(-1);
    }

    return (
        <>
            <div className='header_container'>
                {goBack && <span onClick={handlerClick}>{`<`}</span>}
                <span>{children}</span>
            </div>
        </>
    );
}