import { NavLink } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import ButtonSubmit from "../button_submit/ButtonSubmit";
import './Signup.css';
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../hooks/useModal";
import { Modal } from "../modal/Modal";

const initialForm = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const validationsForm = (form) => {
    let errors = {};
    if (form.username.trim() == '') {
        errors.username = 'El campo "Username" es requerido'
    }
    if (form.email.trim() == '') {
        errors.email = 'El campo "Email" es requerido'
    }
    if (form.password.trim() == '') {
        errors.password = 'El campo "Contraseña" es requerido'
    }
    if (form.confirmPassword.trim() == '') {
        errors.confirmPassword = 'El campo "Confirmar Contraseña" es requerido'
    } else if (form.password != form.confirmPassword) {
        errors.confirmPassword = 'Las contraseñas no coinciden'
    }
    return errors;
};

export default function Signup() {

    const { form, cleanForm, errors, setErrors, handleChange, handleBlur } = useForm(initialForm, validationsForm);
    const [openModalConfirmSignup, setOpenModalConfirmSignup] = useModal(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validationsForm(form));
        if (Object.keys(errors).length === 0) {
            setOpenModalConfirmSignup();
            cleanForm();
        }
    }

    return (
        <div className='signup_container'>
            <h1>BookHub</h1>
            <form onSubmit={handleSubmit}>
                <h2>Registrarse</h2>
                <div className='texfield_signup'>
                    <FontAwesomeIcon icon={faUser} />
                    <input type='text' placeholder="Username" name='username' id='username' value={form.username} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className='texfield_signup'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type='email' placeholder="Email" name='email' id='email' value={form.email} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='texfield_signup'>
                    <FontAwesomeIcon icon={faLock} />
                    <input type='password' placeholder="Contraseña" name='password' id='password' value={form.password} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='texfield_signup'>
                    <FontAwesomeIcon icon={faLock} />
                    <input type='password' placeholder="Confirmar Contraseña" name='confirmPassword' id='confirmPassword' value={form.confirmPassword} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                <ButtonSubmit>Registrarse</ButtonSubmit>
            </form>
            <p className="link_to_signup">¿Ya tienes una cuenta?<NavLink to='/Login'>Inicia Sesion</NavLink></p>
            <Modal title={"Registro Exitoso"} state={openModalConfirmSignup} setState={setOpenModalConfirmSignup}>
                Registro realizado con exito!
            </Modal>
        </div>
    )
}