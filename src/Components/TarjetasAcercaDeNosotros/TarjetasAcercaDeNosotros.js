import React from 'react';
import "./TarjetasAcercaDeNosotros.css";

const TarjetasAcercaDeNosotros = ({ tituloInfo,info  }) => {
    return (
        <div className="o-Textos">
            
            <div className="o-Cajita">
            <div className="o-Titulo-informacion">
            <h1 className="o-Informacion">{tituloInfo}</h1>
           
                <p>{info}</p>
            </div>
        </div>
        </div>
    )
}

export default TarjetasAcercaDeNosotros;