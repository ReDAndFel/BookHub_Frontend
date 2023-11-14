import Nav from "../nav/Nav";
import Header from "../header/Header";
import './Categories.css'
import { useNavigate } from "react-router-dom";
import { useCategory } from "../hooks/useCategory";
import { useEffect } from "react";
import { useAuth } from "../AuthContext";

export default function Categories() {

    const { listCategory, getCategories } = useCategory()
    const { token } = useAuth()
    const navigate = useNavigate();
    const handleClick = (category) => {
        navigate(`/Search/Categoria/${category}`);
    }

    useEffect(() => {
        if (token.idUser != "") {
            getCategories();
        } else {
            navigate("/Login");
        }
    }, [])

    return (
        <>
            <Header goBack={false} > Categorias </Header>
            <div className='categories_container'>
                {listCategory.map((category) => (
                    <div key={category.id} className="categories_item" id={category.id} onClick={() => handleClick(category.id)}>
                        {category.nombre}
                    </div>
                ))}
            </div>
            <Nav />
        </>


    )
}
