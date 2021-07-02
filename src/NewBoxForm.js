import React, { useState } from 'react';
import {v4 as uuid} from "uuid";

function NewBoxForm({addBox}) {

    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor:""
    });

    //Handles changes in text input
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value} = e.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    //Run when submit is clicked by user
    const addNewBox = (e) => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData({ height: '', width:'', backgroundColor:'' });
    }
    return (
        <form onSubmit ={addNewBox}>
            <label htmlFor ="width" > Enter Width </label>
            <input
                onChange ={handleChange}
                type="text"
                id="width"
                name="width"
                value = {formData.width}
                placeholder="width"
            />
            <label htmlFor ="height" > Enter Height </label>
            <input
                onChange ={handleChange}
                type="text"
                id="height"
                name="height"
                value ={formData.height}
                placeholder="height"
            />
            <label htmlFor ="color" > Enter color </label>
            <input
                onChange ={handleChange}
                type="text"
                id="backgroundColor"
                name="backgroundColor"
                value={formData.color}
                placeholder="color"
            />
            <button>Submit</button>
        </form>
    )
}

export default NewBoxForm;