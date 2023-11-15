import Header from "../header/Header";
import './AddLibro.css'
import ButtonSubmit from "../button_submit/ButtonSubmit";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeading, faPenNib, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { useAuth } from "../AuthContext";
import Button from "../button/Button";
import { useBook } from "../hooks/useBook";
import { useFile } from "../hooks/useFile";
import { useCategory } from "../hooks/useCategory";

const validationsForm = (form) => {
    let errors = {};

    if (form.title === '') {
        errors.title = 'El campo "titulo" es requerido'
    }
    if (form.autor === '') {
        errors.autor = 'El campo "autor" es requerido'
    }
    if (form.price === '') {
        errors.price = 'El campo "precio" es requerido'
    }
    if (form.sinopsis === '') {
        errors.sinopsis = 'El campo "sinopsis" es requerido'
    }
    if (form.idCategory === '') {
        errors.idCategory = 'El campo "categoria" es requerido'
    }
    
    return errors;
};

export default function AddLibro(e) {


    const { isMod, validateMod } = useUser();
    const { book, handleAddBook } = useBook();
    const { token } = useAuth();
    const { form, errors, setErrors, handleChange, handleBlur, cleanForm } = useForm(book, validationsForm);
    const [idUser, setIdUser] = useState('');
    const [isLoged, setIsLoged] = useState(false);
    const { getCategories, listCategory } = useCategory()
    const { uploadFile, uploadImage, file, image } = useFile();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validationsForm(form));
        if (Object.keys(errors).length === 0) {
            console.log("el form a enviar al upload y eso es ")
            console.log(form)
            await uploadFile(form.file)
            await uploadImage(form.image)
            form.idUser = token.idUser
            form.file = file
            form.image = image
            console.log(form);
            if (form.image != [] && form.file != []) {
                handleAddBook(form)
                navigate('/Inicio');
            }
        }
    }

    useEffect(() => {

        if (token.idUser != "") {
            setIdUser(token.idUser);
            setIsLoged(true)
            getCategories()
        }

    }, [])

    return (
        <>
            <Header goBack goBackNavigate={"/Inicio"}>Publicar Libro</Header>
            <div className="add_book_main_container">

                {isLoged ? (
                    <form onSubmit={handleSubmit}>
                        <div className='input_file_add_book'>
                            <label className={`label_file ${form.image !== '' && 'selected'}`} htmlFor="image">Subir Imagen</label>
                            <input className={`input_file ${form.image !== '' && 'selected'}`} type='file' name='image' id='image' onChange={handleChange} required />
                        </div>

                        <div className='texfield_add_book'>
                            <FontAwesomeIcon icon={faHeading} />
                            <input type='text' name='title' id='title' placeholder="Titulo" value={form.title} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                            {errors.title && <p>{errors.title}</p>}
                        </div>
                        <div className='texfield_add_book'>
                            <FontAwesomeIcon icon={faSackDollar} />
                            <input type='text' name='price' id='price' placeholder="Precio: $" value={form.price} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                            {errors.price && <p>{errors.price}</p>}
                        </div>
                        <div className='texfield_add_book'>
                            <FontAwesomeIcon icon={faPenNib} />
                            <input type='text' name='autor' id='autor' placeholder="Autor" value={form.autor} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
                        </div>
                        <div className='texfield_add_book'>
                            <FontAwesomeIcon icon={faPenNib} />
                            <input type='text' name='editorial' id='editorial' placeholder="Editorial" value={form.editorial} onChange={handleChange} onBlur={handleBlur} autoComplete="off" />
                        </div>

                        <div className='textarea_add_book'>
                            <FontAwesomeIcon icon={faPenNib} />
                            <textarea name="sinopsis" id="sinopsis" placeholder="Sinopsis" value={form.sinopsis} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                            {errors.sinopsis && <p>{errors.sinopsis}</p>}
                        </div>

                        <div className='combo_box_book'>
                            <select name="idCategory" id="idCategory" value={parseInt(form.idCategory)} onChange={handleChange} onBlur={handleBlur} required>
                                <option value=''>Selecciona una Categoría</option>
                                {listCategory.map((category) => (
                                    <option key={category.id} value={parseInt(category.id)}>{category.nombre}</option>
                                ))}
                            </select>
                            {errors.idCategory && <p>{errors.idCategory}</p>}
                        </div>

                        <div className='input_file_add_book'>
                            <label className={`label_file ${form.file != '' && 'selected'}`} htmlFor="file"> Subir Archivo Libro</label>
                            <input className={`input_file ${form.file != '' && 'selected'}`} type='file' name='file' id='file' onChange={handleChange} required />
                        </div>
                        <ButtonSubmit>Publicar Libro</ButtonSubmit>
                    </form>
                ) : (
                    <Button handlerClick={() => navigate('/Login')}>Iniciar Sesion</Button>
                )}



            </div>
        </>


    )
}
