import './Inicio.css';
import Nav from "../../Components/Nav/Nav"
import FondoTransparente from '../../Components/FondoTransparente/FondoTransparante';
import Footer from "../../Components/Footer/Footer"
import BtnCarrito from "../../Components/Carrito/BtnCarrito"
import Btn1 from '../../Components/Buttons/ButtonXs/Btn1'; 


function Inicio() {
    return (
        <div>
            <Nav ></Nav>
            <FondoTransparente imgRutaFondo="../iglesia.jpg"></FondoTransparente>
            <div  className="o-intro-texto">
                Con tu compra ayudas a la economía local.
                <Btn1 texto="Ver tienda"></Btn1>
                <Btn1 texto="Ver a quien ayudas"></Btn1>
                <BtnCarrito></BtnCarrito> 
                {/* <Footer></Footer>   */}
            </div>
            
        </div>

    );

}

export default Inicio;
