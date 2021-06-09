import React, { useState } from 'react';
import Nav from './../../Components/Nav/Nav';
import Images from '../../img/Imaganes';
import Btn1 from '../../Components/Buttons/ButtonXs/Btn1';
import style from './Descripcion.module.css';
import Carousel from '../../Components/Carousel/Carrusel';
import { Productos } from '../../Productos';

const Descripcion = () => {

    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var id = urlParams.get('id');

    const data = Productos[id];
    console.log()
    return (
        <div className={style.general}>
            <Nav></Nav>

            <div className={style.container}>

                <div className={style.carrusel}>
                    <Carousel></Carousel>
                </div>
                <div className={style.Descripcion}>
                    <h5>{data.tienda}</h5>
                    <h2>{data.nombre}</h2>
                    <p>{data.descripcion}</p>
                    {/* <div>{data.star}</div> */}
                    <h3>COP {data.precio}</h3>
                    <div>
                        <p>Cantidad</p>
                    </div>
                    <div className={style.botones}>
                        <a className={style.btn} href="/Carrito">Comprar</a>
                        <a className={style.btn} href="/Carrito">Añadir a la cesta</a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Descripcion;