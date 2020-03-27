import React, { useState } from "react";

const SmurfForm = (props) => {

    const [ value, setValue ] = useState({
        name : "",
        age : "",
        height : "" , 
    });

    const handleChanges = e => {
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(value);
        setValue({
            name: "",
            age : "",
            height : "",
        })
        console.log("value", value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            name ="name"
            type="text"
            placeholder="Name here..."
            onChange={handleChanges}
            />
            <input 
            name ="age"
            type="number"
            placeholder="Age here..."
            onChange={handleChanges}
            />  
            <input 
            name ="height"
            type="text"
            placeholder="Height here..."
            onChange={handleChanges}
            />  
            <button>Add Smurf</button>                    
        </form>
    )
}

export default SmurfForm;