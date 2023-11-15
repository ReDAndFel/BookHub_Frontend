import { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import Header from '../header/Header';
import { useUser } from '../hooks/useUser';
import './UpdateUser.css'
import { useForm } from '../hooks/useForm';
import ButtonSubmit from '../button_submit/ButtonSubmit';
import { useNavigate } from 'react-router-dom';

const validationsForm = (form) => {
    let errors = {};

    return errors;
};

export default function UpdateUser() {

    const [idUser, setIdUser] = useState('');

    const { getUser, user, isFriend, handleUpdateUser } = useUser();
    const { token, setToken } = useAuth();
    const { form, setForm, errors, setErrors, handleChange, handleBlur } = useForm(user, validationsForm);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validationsForm(form));
        if (Object.keys(errors).length === 0) {
            handleUpdateUser(idUser, form);
            token.username = form.username;
            setToken(token)
            getUser(idUser);
            navigate(-1);
        }

    }

    useEffect(() => {
        if (token.idUser != "") {
            setIdUser(token.idUser);
            getUser(token.idUser)
            console.log(token);
        }else{
            navigate("/Login")
        }
    }, []);

    useEffect(() => {
        setForm(user);
    }, [user]);

    return (
        <>
            <Header goBack goBackNavigate={`/Perfil/${idUser}`}> Informacion de usuario</Header>
            <div className='info_user_container'>
                <form onSubmit={handleSubmit}>
                    <div className='texfield_update_info'>

                        <span>Username:</span>
                        <input type='text' placeholder="Username" name='username' id='username' value={form.username} onChange={handleChange} onBlur={handleBlur} autoComplete="off"  />
                        {errors.username && <p>{errors.username}</p>}
                    </div>

                    <div className='texfield_update_info'>

                        <span>Nombre:</span>
                        <input type='text' placeholder="Nombre" name='firstName' id='firstName' value={form.firstName} onChange={handleChange} onBlur={handleBlur} autoComplete="off"  />
                        {errors.firstName && <p>{errors.firstName}</p>}
                    </div>

                    <div className='texfield_update_info'>

                        <span>Apellido:</span>
                        <input type='text' placeholder="Apellido" name='lastName' id='lastName' value={form.lastName} onChange={handleChange} onBlur={handleBlur} autoComplete="off"  />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>

                    <div className='texfield_update_info'>

                        <span>Email:</span>
                        <input type='email' placeholder="Email" name='email' id='email' value={form.email} onChange={handleChange} onBlur={handleBlur} autoComplete="off"  />
                        {errors.email && <p>{errors.email}</p>}
                    </div>

                    <div className='texfield_update_info'>

                        <span>Telefono:</span>
                        <input type='text' placeholder="Telefono" name='phone' id='phone' value={form.phone} onChange={handleChange} onBlur={handleBlur} autoComplete="off"  />
                        {errors.phone && <p>{errors.phone}</p>}
                    </div>

                    <div className='texfield_update_info'>

                        <span>Dirección:</span>
                        <input type='text' placeholder="Direccion" name='address' id='address' value={form.address} onChange={handleChange} onBlur={handleBlur} autoComplete="off"  />
                        {errors.address && <p>{errors.address}</p>}
                    </div>

                    <ButtonSubmit>Guardar Cambios</ButtonSubmit>

                </form>
            </div>
        </>
    );
}