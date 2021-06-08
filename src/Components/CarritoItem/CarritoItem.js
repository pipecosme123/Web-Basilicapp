import './CarritoItem.css';
import Nav from "../../Components/Nav/Nav"
import TituloSeccion from '../../Components/TituloSeccion/TituloSeccion';


function Carrito({nombreT, imagenP, nombreP, descripcionP, precioP, cantidadP}) {
  return (
    <div>
      
      
        <div class="carrito">
            <h3>Detalles del objeto</h3>
            <div class="agregado">
                <hr></hr>
                <span>{nombreT}</span>
                <div class="producto">
                    <img src={imagenP} alt=""></img>
                    <div class="info">
                        <h5>{nombreP}</h5>
                        <p> {descripcionP}</p>
                        <h5 class="precio"> {precioP}</h5>
                        <h5 class="precio"> {cantidadP} </h5>
                        
                    </div>
                    <div class="checkbox_compra">
                        <label>Comprar</label><br></br>
                        <input type="checkbox" id="cbox1" value="first_checkbox"/>
                    </div>
                </div>
            </div>

            {/* <div class="agregado">
                            
                <div class="resumen">
                    <h4>Resumen del pedido</h4>
                    <hr></hr>
                    <div class="total">
                        <h5>Total</h5>
                        <h2>COP 48.000</h2>
                    </div>
                    <button class="comprar">Comprar</button>
                </div>
            </div> */}
        </div>

    </div>
  );

}


export default Carrito;