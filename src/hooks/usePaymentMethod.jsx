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
    const [paymentMethod, setPaymentMethod] = useState(paymentMethodDto)
    const [listPaymentMethods, setListPaymentMethods] = useState([]);

    const handleAddPaymentMethod = (idUser, formPaymentMethod) => {
        let listPaymentMethodAux = [ ...listPaymentMethods ]
        let newPaymentMethod = { ...formPaymentMethod };
        listPaymentMethodAux.push(newPaymentMethod)
        setPaymentMethod(newPaymentMethod) // metodo para crear el metodo de pago
        setListPaymentMethods(listPaymentMethodAux); // metodo para agregarlo a la lista
        console.log(`Se agregó el metodo de pago ${formPaymentMethod} en la lista de metodos de pago de ${idUser}`)
        console.log(listPaymentMethodAux)
    }

    const handleDeletePaymentMethod = (idUser, idPaymentMethod) => {
        console.log(`id del metodo a eliminar es ${idPaymentMethod}`)
        let listPaymentMethodAux = [ ...listPaymentMethods ]
        console.log(`lista antes`)
        console.log(listPaymentMethodAux)
        listPaymentMethodAux = listPaymentMethodAux.filter(paymentMethod => paymentMethod.id !== idPaymentMethod);
        console.log(`lista despues`)
        console.log(listPaymentMethodAux)
        setListPaymentMethods(listPaymentMethodAux); // metodo para agregarlo a la lista
        console.log(`Se quitó el metodo de pago ${idPaymentMethod} en la lista de metodos de pago de ${idUser}`)
    }

    const getPaymentMethods = (idUser) => {
        let listPaymentMethod = [
            {
                id: '1',
                cardNumber: '10012412',
                surname: 'Andres Felipe',
                expeditionDate: '10-10-2026',
                cvv: '123',
                idUser: '1004684293'
            }, {
                id: '2',
                cardNumber: '2141240123',
                surname: 'Andres Felipe',
                expeditionDate: '',
                cvv: '523',
                idUser: '1004684293'
            },
            {
                id: '3',
                cardNumber: '4120402013',
                surname: 'Andres Felipe',
                expeditionDate: '',
                cvv: '124',
                idUser: '1004684293'
            }
        ] //metodo para obtener la lista de metodos de pago
        setListPaymentMethods(listPaymentMethod);
    }

    return { listPaymentMethods, getPaymentMethods, handleDeletePaymentMethod, handleAddPaymentMethod, paymentMethod }

}