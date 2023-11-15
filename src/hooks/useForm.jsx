import { useState } from "react";

export const useForm = (initialForm, validationsForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        setErrors(validationsForm(form));
    };

    const handleSelectFile = (e) => {
        const selectedFile = e.target.files[0];
        setForm({ ...form, file: selectedFile });
        setErrors(validationsForm(form));
      };
      

    const handleBlur = (e) => {
        handleChange(e);
    };

    const cleanForm = () => {
        setForm(initialForm);
    }

    return {
        form, cleanForm, errors,setForm, handleChange, handleSelectFile, handleBlur, setErrors
    };
}