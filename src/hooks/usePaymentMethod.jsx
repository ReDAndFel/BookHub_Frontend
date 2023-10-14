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
        let newPaymentMethod={...formPaymentMethod}
        newPaymentMethod.idUser = idUser
        console.log(`Se agregó el siguiente metodo de pago en los metodos de pago del usuario con id ${idUser}`)// metodo para agregar metodo de pago
        console.log(newPaymentMethod)
        
    }

    const handleDeletePaymentMethod = (idPaymentMethod) => {
        console.log(`id del metodo a eliminar es ${idPaymentMethod}`)
        let listPaymentMethodAux = [ ...listPaymentMethods ]
        console.log(`lista antes`)
        console.log(listPaymentMethodAux)
        listPaymentMethodAux = listPaymentMethodAux.filter(paymentMethod => paymentMethod.id !== idPaymentMethod);
        console.log(`lista despues`)
        console.log(listPaymentMethodAux)
        setListPaymentMethods(listPaymentMethodAux); // metodo para quitar de la lista a la lista
        console.log(`Se quitó el metodo de pago ${idPaymentMethod}`)
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

    const getPaymentMethod = (idUser) => {
        let paymentMethod =   {
                id: '1',
                cardNumber: '10012412',
                surname: 'Andres Felipe',
                expeditionDate: '10-10-2026',
                cvv: '123',
                idUser: '1004684293'
            } //metodo para obtener un metodo de pago
        setPaymentMethod(paymentMethod);
    }

    const handleUpdatePaymentMethod = (idPaymentMethod, updatedPaymentMethod) =>{
        console.log(`Se actualizó el metodo de pago con el id ${idPaymentMethod}`)
        setPaymentMethod(updatedPaymentMethod); // metodo de actualizar metodo de pago
        console.log(updatedPaymentMethod)
    }
    const loadPaymentMethod = (idPaymentMethod) =>{
        let paymentMethodAux = {
            id: '1',
            cardNumber: '50123012',
            surname: 'Andres Felipe',
            expeditionDate: '2023-10-10',
            cvv: '123',
            idUser: '1004684293'
        } //metodo para obtener paymentMethod por id
        setPaymentMethod(paymentMethodAux); // metodo de actualizar metodo de pago
        console.log(paymentMethodAux)
    }
    return { listPaymentMethods, getPaymentMethods,loadPaymentMethod,getPaymentMethod,handleUpdatePaymentMethod, handleDeletePaymentMethod, handleAddPaymentMethod, paymentMethod }

}