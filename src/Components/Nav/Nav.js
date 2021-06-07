import React from 'react';

import "./Nav.css";
import {Link} from "react-router-dom"

const Nav = () => {
    return (
    
        <div className="o-banner">
            <div>
                <h1 className="o-logo">B a s i l i c a p p </h1>
            </div>
    
            <ul>
                <li><Link to="./Inicio" >Inicio</Link>
                </li>
                <li><a href="../Tienda/tienda.html" >Tienda</a></li>
                <li><a href="../preguntas/preguntas.html" >Preguntas</a></li>
                <li><Link to="AcercaDeNosotros" >Sobre
                        nosotros</Link></li>
                <li><Link to="./Vendedores" >Vendedores</Link></li>
            </ul>
            <ul>
                <li><Link to="./Login" >Iniciar sesión</Link></li>
            </ul>
        </div>
    
    )
}
export default Nav;