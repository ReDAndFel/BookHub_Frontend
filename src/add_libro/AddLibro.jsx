import Header from "../header/Header";
import './AddLibro.css'
import ButtonSubmit from "../button_submit/ButtonSubmit";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeading, faPenNib, faSackDollar } from "@fortawesome/free-solid-svg-icons";

const initialForm = {
    image: "",
    title: "",
    price: "",
    editorial: "",
    synopsis: "",
    category: "",
    availability: false
}

const validationsForm = (form) => {
    let errors = {};
    if (form.image === '') {
        errors.image = 'Se debe agregar una portada'
    }
    if (form.title === '') {
        errors.title = 'El campo "titulo" es requerido'
    }
    if (form.price === '') {
        errors.price = 'El campo "precio" es requerido'
    }
    if (form.editorial === '') {
        errors.editorial = 'El campo "editorial" es requerido'
    }
    if (form.synopsis === '') {
        errors.synopsis = 'El campo "sinopsis" es requerido'
    }
    if (form.categogy === '') {
        errors.categogy = 'El campo "categoria" es requerido'
    }
    if (form.availability === '') {
        errors.availability = 'El campo "disponibilidad" es requerido'
    }
    return errors;
};

export default function AddLibro(e) {

    const { form, errors, setErrors, handleChange, handleBlur } = useForm(initialForm, validationsForm);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validationsForm(form));
        if (Object.keys(errors).length === 0) {
            console.log(form);
            navigate('/Inicio');
        }
    }

    return (
        <>
            <Header goBack>Publicar Libro</Header>
            <div className='add_book_container'>
                <form onSubmit={handleSubmit}>

                    <div className='input_file_add_book'>
                        <label htmlFor="image">Portada: <input type='file' name='image' id='image' value={form.image} onChange={handleChange} onBlur={handleBlur} required /></label>
                        {errors.image && <p>{errors.image}</p>}
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
                        <input type='text' name='editorial' id='editorial' placeholder="Editorial" value={form.editorial} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                        {errors.editorial && <p>{errors.editorial}</p>}
                    </div>

                    <div className='textarea_add_book'>
                        <FontAwesomeIcon icon={faPenNib} />
                        <textarea name="synopsis" id="synopsis" placeholder="Sinopsis" value={form.synopsis} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                        {errors.synopsis && <p>{errors.synopsis}</p>}
                    </div>

                    <div className='combo_box_book'>
                        <select name="category" id="category" value={form.categogy} onChange={handleChange} onBlur={handleBlur} required>
                            <option value=''>Selecciona una Categoría</option>
                            <option value="Terror">Terror</option>
                            <option value="Educacion">Educacion</option>
                            <option value="Historia">Historia</option>
                            <option value="Romance">Romance</option>
                            <option value="Salud y Cuidado">Salud y Cuidado</option>
                            <option value="Fantasia">Fantasia</option>
                            <option value="Misterio">Misterio</option>
                        </select>
                        {errors.category && <p>{errors.category}</p>}
                    </div>

                    <div className='combo_box_book'>
                        <select name="availability" id="availability">
                            <option value={true}>Disponible</option>
                            <option value={false}>No disponible</option>
                        </select>
                        {errors.availability && <p>{errors.availability}</p>}
                    </div>

                    <ButtonSubmit>Publicar Libro</ButtonSubmit>

                </form>
            </div>
        </>

    )
}
