import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav'
import { Productos } from '../../Productos'
import './Tienda.css'

function Tienda() {
    const data = Productos;
    let id2 = 0;
    return (
        <div>
            <Nav></Nav>
            <div className="container">
                <h1>Todos los productos</h1>
                <div className="productos">
                    {data.map(prod => (
                        <div key={prod.id}>
                            <a href={`/Descripcion/?id=${id2++}`}>
                                <div className="card">
                                    <img src={prod.img1} />
                                    <p>{prod.nombre}</p>
                                    <h1>{prod.precio}</h1>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tienda;
