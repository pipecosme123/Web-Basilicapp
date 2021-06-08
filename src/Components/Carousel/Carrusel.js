import React, {Component, useState} from 'react';
// import { Carousel } from 'react-bootstrap';
import style from './Carrusel.module.css';
import {Productos} from '../../Productos';

class Carrusel extends Component  {

  constructor () {
    super ()  
    this.state = {
      showMe1:true,
      showMe2:false,
      showMe3:false
    }
  }
  sliderOM1(){
    this.setState({
      showMe1: !this.state.showMe1,
      showMe2: false,
      showMe3: false
    })
  }

  sliderOM2(){
    this.setState({
      showMe1: false,
      showMe2: !this.state.showMe2,
      showMe3: false
    })
  }

  sliderOM3(){
    this.setState({
      showMe1: false,
      showMe2: false,
      showMe3: !this.state.showMe3
    })
  }
  
render() {
  const valores = window.location.search;
  const urlParams = new URLSearchParams(valores);
  var id = urlParams.get('id');

  const data = Productos[id];
  return (
    <div className={style.sliders}>
      <div className={style.slider}>
        <div>
          {
            this.state.showMe1?
            <img id="img1" src={data.img1}/>
            :null
          }
        </div>
        <div>
          {
            this.state.showMe2?
            <img id="img2" src={data.img2}/>
            :null
          }
        </div>
        <div>
          {
            this.state.showMe3?
            <img id="img3" src={data.img3}/>
            :null
          }
        </div>
      </div>
      <div className ={style.buttons} id="buttons">
        <button className={style.slider1} onClick={() => this.sliderOM1()}>1</button>
        <button className={style.slider2} onClick={() => this.sliderOM2()}>2</button>
        <button className={style.slider3} onClick={() => this.sliderOM3()}>3</button>
      </div>
    </div>
  );
}
  
}

export default Carrusel;