import React from 'react';
import "./FondoTransparente.css";

const FondoTransparente = ({ imgRutaFondo }) => {
    return (
        <div>
            <img className="o-fondo" src={imgRutaFondo} alt="imagen"></img>
        </div>
    )
}

export default FondoTransparente;