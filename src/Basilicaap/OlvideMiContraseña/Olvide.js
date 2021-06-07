import './Olvide.css';
import Nav from "../../Components/Nav/Nav"
import InputXs from '../../Components/InputXs/InputXs';
import Btn1 from '../../Components/Buttons/ButtonXs/Btn1';
import {Link} from "react-router-dom"

function Olvide() {
    return (
        <div>
            <Nav ></Nav>

            <div className="o-Lg">
                <div className="o-OlvideGeneral">
                    <div className="o-Olvide">
                        <h1>Iniciar sesión</h1>
                        <InputXs name="user" mostrar="Ingrese su correo electronico"></InputXs>
                        <Btn1 texto="Continuar"></Btn1>


                        <h5>¿Aun no tienes cuenta?</h5>
                        <Link className="o-areg" to="/Registro">¡Registrate ahora!</Link>


                    </div>
                </div>
            </div>


        </div>


    );

}


export default Olvide;
