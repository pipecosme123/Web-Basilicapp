import './Login.css';
import Nav from "../../Components/Nav/Nav"
import InputXs from '../../Components/InputXs/InputXs';
import InputPass from '../../Components/InputPassword/InputPass';
import Btn1 from '../../Components/Buttons/ButtonXs/Btn1';
import {Link} from "react-router-dom"


function Login() {
  return (
    <div>
      <Nav ></Nav>

      <div className="o-Lg">
        <div className="o-LoginGeneral">
          <div className="o-Login">
            <h1>Iniciar sesión</h1>
            <InputXs name="user" mostrar="Ingrese su usuario"></InputXs>
            <InputPass name="password" mostrar="Ingrese su contraseña"></InputPass>
            <Btn1 texto="Ingresar"></Btn1>

            <Link to="/OlvideMiContraseña">Olvide mi contraseña</Link>
            <h5>¿Aun no tienes cuenta?</h5>
            <Link className="o-areg" to="/Registro">¡Registrate ahora!</Link>

          </div>
        </div>
      </div>


    </div>


  );

}


export default Login;
