import './App.css';
import React, { useEffect } from 'react';

import Login from './Basilicaap/Login/Login'
import Olvide from './Basilicaap/OlvideMiContraseña/Olvide'
import Registro from './Basilicaap/Registro/Registro'
import AcercaDeNosotros from './Basilicaap/AcercaDeNosotros/AcercaDeNosotros'
import Vendedores from './Basilicaap/Vendedores/Vendedores'
import Inicio from './Basilicaap/Inicio/Inicio'

import {  BrowserRouter,  Route,  useLocation,  withRouter,  Redirect}  from 'react-router-dom'
/** Hola mundo!!! */
function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
      <Route exact path="/Inicio" component={Inicio}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/OlvideMiContraseña" component={Olvide}></Route>
        <Route exact path="/Registro" component={Registro}></Route>
        <Route exact path="/AcercaDeNosotros" component={AcercaDeNosotros}></Route>
        <Route exact path="/Vendedores" component={Vendedores}></Route>

        {/* <Route exact path="/productos" component={Productos}></Route>
        <Route exact path="/Contactenos" component={Contactenos}></Route>
        <Route exact path="/Inicio_sesion" component={Inicio_sesion}></Route>
        <Route exact path="/Registro" component={Registro}></Route>
        <Route exact path="/quienes-somos" component={Quienes}></Route>*/}
        <Route exact path="/"><Redirect to="/Login" /></Route> 
      </ScrollToTop>
    </BrowserRouter>


  );

}


export default App;
