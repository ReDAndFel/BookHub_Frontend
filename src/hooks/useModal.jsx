import { useState } from "react";

export function useModal (initialValue = false){

    const [openModal, setOpenModal] = useState(initialValue);
    
    const setStateModal = () => setOpenModal(!openModal);

    return[openModal, setStateModal];
}