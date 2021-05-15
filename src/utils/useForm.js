import { useState } from "react";

function useForm(initialState = {}) {
    const [inputs, setInputs] = useState(initialState);

    const handleInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const resetForm = (e) => {
        setInputs(initialState);
    }

    return [inputs, handleInputChange, resetForm];
}

export default useForm;