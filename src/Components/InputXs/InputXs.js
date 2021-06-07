import React from 'react';

import "./InputXs.css";

const InputXs = ({nombre,mostrar, onChange}) => {
    return (
        <div>
            <input  className="o-InputXs" type="email" name={nombre} placeholder={mostrar} onChange={onChange}></input>

        </div>
    )
}

export default InputXs;