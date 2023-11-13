import { useEffect } from "react"
import { useTransaction } from "../hooks/useTransaction"
import "./ConfirmPay.css"
import { useAuth } from "../AuthContext"

export default function () {

    const {transaction, confirmTransaction, transactionDetail, setTransactionDetail} = useTransaction
    const {token} = useAuth

    useEffect(()=>{
        
    },[])

    return(
        <div className="confirm_pay_container">

        </div>
    )
}