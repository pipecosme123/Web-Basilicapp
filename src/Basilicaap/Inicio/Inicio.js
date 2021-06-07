import './Inicio.css';
import Nav from "../../Components/Nav/Nav"
import {Link} from "react-router-dom"
import FondoTransparente from '../../Components/FondoTransparente/FondoTransparante';


function Inicio() {
    return (
        <div>
            <Nav ></Nav>
            <FondoTransparente imgRutaFondo="../iglesia.jpg"></FondoTransparente>
            


        </div>


    );

}


export default Inicio;
