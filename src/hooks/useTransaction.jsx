import { useState } from "react"

const transactionDTO = {
    id: 0,
    totalPrice: 0.0,
    date: "",
    idPaymentMethod: 0,
    transactionDetailDTOS: [],
    idUser: 0
}

const transactionDetailDTO = {
    id: 0,
    price: 0,
    idTransaction: 0,
    idBook: 0,
}

export const useTransaction = () => {

    const apiUrl = "http://localhost:8080/api/transaccion"

    const { transaction, setTransaction } = useState(transactionDTO)
    const { transactionDetail, setTransactionDetail } = useState([])

    const confirmTransaction = async (transaction) => {
        try {
            const response = await fetch(`${apiUrl}/crear`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transaction),
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

    return {
        transaction, confirmTransaction, transactionDetail, setTransactionDetail
    }
}