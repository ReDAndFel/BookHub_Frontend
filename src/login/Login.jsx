import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import ButtonSubmit from "../button_submit/ButtonSubmit";
import './Login.css';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const initialForm = {
    email: "",
    password: ""
}

const validationsForm = (form) => {
    let errors = {};
    if (form.email === '') {
        errors.email = 'El campo "email" es requerido'
    }
    if (form.password === '') {
        errors.password = 'El campo "contraseña" es requerido'
    }
    return errors;
};

export default function Login() {

    const { form, errors,setErrors, handleChange, handleBlur } = useForm(initialForm, validationsForm);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validationsForm(form));
        if (Object.keys(errors).length === 0) {
            console.log(form);
            navigate('/Home');
        }
    };

    return (
        <div className='login_container'>
            <h1>BookHub</h1>
            <form onSubmit={handleSubmit}>
                <h2>Iniciar Sesion</h2>
                <div className='texfield_login'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type='email' name='email' id='email' placeholder="Email" value={form.email} onChange={handleChange} onBlur={handleBlur}  autoComplete="off" required />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='texfield_login'>
                <FontAwesomeIcon icon={faLock} />
                    <input type='password' placeholder="Contraseña" name='password' id='password' value={form.password} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <ButtonSubmit>Iniciar Sesion</ButtonSubmit>
            </form>
            <p className="link_to_register">¿No tienes una cuenta?<NavLink to='/Signup'>    Registrate</NavLink></p>
        </div>
    )
}