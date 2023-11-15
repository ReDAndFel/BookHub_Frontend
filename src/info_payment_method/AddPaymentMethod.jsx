import { useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header";
import { useForm } from "../hooks/useForm";
import { useModal } from "../hooks/useModal";
import { usePaymentMethod } from "../hooks/usePaymentMethod";
import { useAuth } from "../AuthContext";
import { useEffect, useState } from "react";
import { Modal } from "../modal/Modal";
import './AddPaymentMethod.css'
import ButtonSubmit from "../button_submit/ButtonSubmit";

const validationsForm = (form) => {
    let errors = {};
    if (form.cardNumber.trim() == '') {
        errors.cardNumber = 'El campo "Numero de tarjeta" es requerido'
    }
    if (form.surname.trim() == '') {
        errors.surname = 'El campo "Titular" es requerido'
    }
    if (form.expeditionDate.trim() == '') {
        errors.expeditionDate = 'El campo "Fecha de Expedición" es requerido'
    }
    if (!form.cvv || form.cvv.toString().trim() === '') {
        errors.cvv = 'El campo "Cvv" es requerido';
    }
    return errors;
};

export default function AddPaymentMethod() {

    const { handleAddPaymentMethod, handleUpdatePaymentMethod, paymentMethod, getPaymentMethod } = usePaymentMethod();
    const { form, errors, setErrors,setForm, handleChange, handleBlur } = useForm(paymentMethod, validationsForm);
    const { token } = useAuth();
    let { idPaymentMethod } = useParams();

    const navigate = useNavigate();

    const [idUser, setIdUser] = useState('');
    const [openModalConfirm, setOpenModalConfirm] = useModal(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validationsForm(form));
        if (Object.keys(errors).length === 0) {
            if (!idPaymentMethod) {
                form.idUser = idUser
                handleAddPaymentMethod(form)
                console.log("En agregar")
                console.log("El formulario fue: ")
                console.log(form)
                
            } else {
                handleUpdatePaymentMethod(idPaymentMethod, form)
                console.log("En Actualizar")
                console.log("El formulario fue: ")
                console.log(form)               

            }
           
            navigate(`/Metodos_de_pago/${idUser}`);
        }
    }

    useEffect(() => {
        console.log(idPaymentMethod)

        if (token.idUser != "") {
            setIdUser(token.idUser);
            if (idPaymentMethod){
                getPaymentMethod(idPaymentMethod);
            }
        }

    }, [])

    useEffect(() => {
        setForm(paymentMethod);
    }, [paymentMethod]);

    return (
        <>
            <Header goBack goBackNavigate={`/Metodos_de_pago/${idUser}`}>Información de metodo de pago</Header>
            <div className="add_payment_method_container">
                <form onSubmit={handleSubmit}>
                    <div className='texfield_payment_method'>
                        <label>Numero de tarjeta:</label>
                        <input type='number' placeholder="Numero de tarjeta" name='cardNumber' id='cardNumber' value={form.cardNumber} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                        {errors.cardNumber && <p>{errors.cardNumber}</p>}
                    </div>
                    <div className='texfield_payment_method'>
                        <label>Titular:</label>
                        <input type='text' placeholder="Titular" name='surname' id='surname' value={form.surname} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                        {errors.surname && <p>{errors.surname}</p>}
                    </div>
                    <div className='texfield_payment_method'>
                        <label>Fecha de Expedición:</label>
                        <input type='date' name='expeditionDate' id='expeditionDate' value={form.expeditionDate} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                        {errors.expeditionDate && <p>{errors.expeditionDate}</p>}
                    </div>
                    <div className='texfield_payment_method'>
                        <label>Cvv:</label>
                        <input type='number' placeholder="Cvv" name='cvv' id='cvv' value={form.cvv} onChange={handleChange} onBlur={handleBlur} autoComplete="off" required />
                        {errors.cvv && <p>{errors.cvv}</p>}
                    </div>
                    {!idPaymentMethod ? (<ButtonSubmit>Agregar Metodo de Pago</ButtonSubmit>):(<ButtonSubmit>Guardar Cambios</ButtonSubmit>) }
                </form>
                <Modal title={"Se Agregó con Éxito"} state={openModalConfirm} setState={setOpenModalConfirm}>
                    Registro de metodo de pago realizado con éxito!
                </Modal>
            </div>
        </>
    )
}