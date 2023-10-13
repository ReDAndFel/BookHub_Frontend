import { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import Header from '../header/Header';
import { useUser } from '../hooks/useUser';
import './UpdateUser.css'
import { useForm } from '../hooks/useForm';
import ButtonSubmit from '../button_submit/ButtonSubmit';

const validationsForm = (form) => {
    let errors = {};
    if (form.username.trim() == '') {
        errors.username = 'El campo "Username" es requerido'
    }
    if (form.email.trim() == '') {
        errors.email = 'El campo "Email" es requerido'
    }
    if (form.phone.trim() == '') {
        errors.email = 'El campo "Email" es requerido'
    }
    if (form.firstName.trim() == '') {
        errors.email = 'El campo "Email" es requerido'
    }
    if (form.lastName.trim() == '') {
        errors.email = 'El campo "Email" es requerido'
    }
    if (form.address.trim() == '') {
        errors.email = 'El campo "Email" es requerido'
    }

    return errors;
};

export default function UpdateUser() {

    const [idUser, setIdUser] = useState('');

    const { getUser, user, isFriend, handleUpdateUser } = useUser();
    const { token } = useAuth();
    const { form, setForm, errors, setErrors, handleChange, handleBlur } = useForm(user, validationsForm);



    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validationsForm(form));
        if (Object.keys(errors).length === 0) {
            handleUpdateUser(idUser, form);
        }

    }

    useEffect(() => {
        if (token.idUser != "") {
            setIdUser(token.idUser);
            getUser(idUser)
            console.log(token);
        }
    }, []);

    useEffect(() => {
        setForm(user);
    }, [user]);

    return (
        <>
            <Header goBack> Informacion de usuario</Header>
            <div className='info_user_container'>
                <form onSubmit={handleSubmit}>
                    <div className='texfield_update_info'>

                        <span>Username:</span>
                        <input type='text' placeholder="Username" name='username' id='username' value={form.username} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                        {errors.username && <p>{errors.username}</p>}
                    </div>

                    <div className='texfield_update_info'>

                        <span>Nombre:</span>
                        <input type='text' placeholder="Nombre" name='firstName' id='firstName' value={form.firstName} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                        {errors.firstName && <p>{errors.firstName}</p>}
                    </div>

                    <div className='texfield_update_info'>

                        <span>Apellido:</span>
                        <input type='text' placeholder="Apellido" name='lastName' id='lastName' value={form.lastName} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>

                    <div className='texfield_update_info'>

                        <span>Email:</span>
                        <input type='email' placeholder="Email" name='email' id='email' value={form.email} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                        {errors.email && <p>{errors.email}</p>}
                    </div>

                    <div className='texfield_update_info'>

                        <span>Telefono:</span>
                        <input type='text' placeholder="Telefono" name='phone' id='phone' value={form.phone} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                        {errors.phone && <p>{errors.phone}</p>}
                    </div>

                    <div className='texfield_update_info'>

                        <span>Dirección:</span>
                        <input type='text' placeholder="Direccion" name='address' id='address' value={form.address} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                        {errors.address && <p>{errors.address}</p>}
                    </div>

                    <ButtonSubmit>Guardar Cambios</ButtonSubmit>

                </form>
            </div>
        </>
    );
}