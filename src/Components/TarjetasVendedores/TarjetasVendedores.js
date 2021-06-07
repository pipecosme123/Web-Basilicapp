import React from 'react';
import "./TarjetasVendedores.css";

const TarjetasVendedores = ({rutaimg,titulo,descripcionTienda})=> {
    return(
        
        <div className="o-Tarjetas">
        <div className="o-Tarjeta">
            <img className="o-imagenTarjeta" src={rutaimg} alt="imagen" />
            <span className="o-title">{titulo}</span>
            <p>{descripcionTienda}</p>
            
        </div>
        </div>
    )
}

export default TarjetasVendedores;