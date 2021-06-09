import './Preguntas.css';
import { Link } from "react-router-dom"
import Nav from "../../Components/Nav/Nav"
import PreguntasComp from '../../Components/PreguntasComp/PreguntasComp';
import InputXs from '../../Components/InputXs/InputXs';


function Preguntas() {
    return (
        <div>
            <Nav ></Nav>
            <h1>¡Realiza tu pregunta!</h1>
            <div className="o-inputPreg">
            <InputXs name="preguntas" mostrar="Ingrese su pregunta"></InputXs>

            </div>
            <div class="o-containter-preguntas">


<div class="o-preguntas">
        <PreguntasComp  pregunta="Quiero un envio a a Cali, cuanto se demora?"imgUser="./user.png" nombreUser="Usuario_123123"></PreguntasComp>
        <PreguntasComp  pregunta="Quiero un envio a Tulua, cuanto se demora?"imgUser="./user.png" nombreUser="Usuario_123123"></PreguntasComp>
        <PreguntasComp  pregunta="Quiero un envio a Bogota, cuanto se demora y cual es el costo?"imgUser="./user.png" nombreUser="Usuario_123123"></PreguntasComp>
        <PreguntasComp  pregunta="Tienen tienda fisica?"imgUser="./user.png" nombreUser="Usuario_123123"></PreguntasComp>

    </div>

    <div className="o-EspacioPreg">
    
    </div>

</div>
</div>




    );

}


export default Preguntas;