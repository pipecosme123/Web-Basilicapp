import { useState } from "react"
import './Registro.css';
import { Link } from "react-router-dom"
import firebase from "../../Firebase/FirebaseConfig"
import Nav from "../../Components/Nav/Nav"
import InputXs from '../../Components/InputXs/InputXs';
import InputPass from '../../Components/InputPassword/InputPass';
import Btn1 from '../../Components/Buttons/ButtonXs/Btn1';
import { useHistory } from "react-router-dom";
import React from 'react';

function Registro() {
  const history = useHistory();

  const [correo, setCorreo] = useState("");
  const [passwordreg, setpasswordreg] = useState("");

  //OBTENER VALORES DE LOS INPUTS
  const handleInputChangeCorreo = (e) => {
    setCorreo( e.target.value)
  };
  const handleInputChangePassword = (e) => {
    setpasswordreg( e.target.value)
  };

  const registerUser = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(correo, passwordreg)
      .then(() => {

        setTimeout(() => {
          history.push("Inicio");
        }, 900);

      })
      .catch((error) => {
        if (error) {
          console.log(error);
        } else {
          return null;
        }
      });
  };

  return (

    <div>
      <Nav ></Nav>

      <div className="o-Rg">
        <div className="o-RegistroGeneral">
          <div className="o-Registro">
            <h1>Registro</h1>
            <InputXs name="nombre" mostrar="Ingrese su nombre" ></InputXs>
            <InputXs name="apellido" mostrar="Ingrese su apellido"></InputXs>
            <InputXs name="correo" mostrar="Ingrese su correo electronico" onChange={handleInputChangeCorreo}></InputXs>
            <InputPass name="passwordreg" mostrar="Ingrese su contraseña" onChange={handleInputChangePassword} ></InputPass>
            <Btn1 texto="Registrarse" onClick={registerUser}></Btn1>

            <Link to="./OlvideMiContraseña">Olvide mi contraseña</Link>
            <h5>¿Aun no tienes cuenta?</h5>

          </div>
        </div>
      </div>


    </div>


  );

}


export default Registro;
