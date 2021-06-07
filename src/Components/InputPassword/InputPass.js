import React from 'react';

import "./InputPass.css";

const InputPass = ({nombre,mostrar, onChange}) => {
    return (
        <div>
            <input className="o-InputPass" type="password" name={nombre} placeholder={mostrar} onChange={onChange}></input>

        </div>
    )
}

export default InputPass;