import './Carrito.css';
import Nav from "../../Components/Nav/Nav"
import TituloSeccion from '../../Components/TituloSeccion/TituloSeccion';
import CarritoItem from '../../Components/CarritoItem/CarritoItem'


let var1="Tienda Sagrado Corazón"
let var2="Estatua Virgen Maria"
let var3="ofofmoimbigbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbmgkbmooooooooooooooo"
let var4="52.000"
let var5="2"
let var6=""


function Carrito() {
  return (
    <div>
        <Nav ></Nav>
        <TituloSeccion tituloSeccion="Carrito de compras"></TituloSeccion>
        <div class="o-carroC">
            <div>
            
            
            
            <CarritoItem nombreP={var1} nombreP={var2} descripcionP={var3} precioP={var4} cantidadP={var5}></CarritoItem>
            <CarritoItem nombreP={var1} nombreP={var2} descripcionP={var3} precioP={var4} cantidadP={var5}></CarritoItem>
            <CarritoItem nombreP={var1} nombreP={var2} descripcionP={var3} precioP={var4} cantidadP={var5}></CarritoItem>


            
            </div>
            <div class="summary">
                <div class="summary-total-items"><span class="total-items"></span> Items in your Bag</div>
                <div class="summary-subtotal">
                <div class="subtotal-title">Subtotal</div>
                <div class="subtotal-value final-value" id="basket-subtotal">130.00</div>
                
                </div>
                <div class="summary-delivery">
                <select name="delivery-collection" class="summary-delivery-selection">
                    <option value="0" selected="selected">Seleccionar metodo de pago</option>
                    <option value="collection">Pago contra entrega</option>
                    <option value="first-class">transferencia bancaria</option>
                    <option value="second-class">Tarjeta credito/debito</option>
                    
                </select>
                </div>
                <div class="summary-total">
                <div class="total-title">Total</div>
                <div class="total-value final-value" id="basket-total">130.00</div>
                </div>
                <div class="summary-checkout">
                <button class="checkout-cta">Ir a pagar</button>
                </div>
            </div>
        </div>
    </div>
  );

}


export default Carrito;