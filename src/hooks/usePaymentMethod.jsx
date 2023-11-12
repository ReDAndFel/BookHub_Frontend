import { useState } from "react"

const paymentMethodDto = {
    id: '',
    cardNumber: '',
    surname: '',
    expeditionDate: '',
    cvv: '',
    idUser: ''
}

export const usePaymentMethod = () => {
    const apiUrl = "http://localhost:8080/api/metodo_de_pago"
    const [paymentMethod, setPaymentMethod] = useState(paymentMethodDto)
    const [listPaymentMethods, setListPaymentMethods] = useState([]);

    const handleAddPaymentMethod = async (formPaymentMethod) => {
        try {
            const response = await fetch(`${apiUrl}/agregar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formPaymentMethod),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error en la solicitud http:', error);
        }

    }

    const handleDeletePaymentMethod = async (idPaymentMethod) => {
        try {
            const response = await fetch(`${apiUrl}/eliminar/${idPaymentMethod}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setListPaymentMethods((prevList) => prevList.filter((paymentMethod) => paymentMethod.id !== idPaymentMethod));

        } catch (error) {
            console.error('Error en la solicitud http:', error);
        }
    }

    const getPaymentMethods = (idUser) => {
        fetch(`${apiUrl}/obtener_metodos_de_pago_user/${idUser}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setListPaymentMethods(data.response);
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    const getPaymentMethod = (idPaymentMethod) => {
        fetch(`${apiUrl}/obtener_metodo_de_pago/${idPaymentMethod}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setPaymentMethod(data.response);
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    const handleUpdatePaymentMethod = async (idPaymentMethod, updatedPaymentMethod) => {
        try {
            const response = await fetch(`${apiUrl}/actualizar/${idPaymentMethod}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPaymentMethod),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.error('Error en la solicitud http:', error);
        }
    }

    return { listPaymentMethods, getPaymentMethods, getPaymentMethod, handleUpdatePaymentMethod, handleDeletePaymentMethod, handleAddPaymentMethod, paymentMethod }

}