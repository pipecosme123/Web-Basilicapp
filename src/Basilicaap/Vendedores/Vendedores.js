import './Vendedores.css';
import Nav from "../../Components/Nav/Nav"
import TarjetasVendedores from '../../Components/TarjetasVendedores/TarjetasVendedores';
import TituloSeccion from '../../Components/TituloSeccion/TituloSeccion';

import FondoTransparente from '../../Components/FondoTransparente/FondoTransparante';

function Vendedores() {
  return (
    <div>
      <Nav ></Nav>
      
      <TituloSeccion tituloSeccion="Vendedores disponibles"></TituloSeccion>
      <div className="o-ContainerTarjetas">
        
        <TarjetasVendedores rutaimg="imgTienda.jpg" titulo="Tienda sumerce" descripcionTienda="30 años en servicio"></TarjetasVendedores>
        <TarjetasVendedores rutaimg="imgTienda.jpg" titulo="Tienda sumerce" descripcionTienda="30 años en servicio"></TarjetasVendedores>
        <TarjetasVendedores rutaimg="imgTienda.jpg" titulo="Tienda sumerce" descripcionTienda="30 años en servicio"></TarjetasVendedores>
      </div>

      <div className="o-ContainerTarjetas">
        <TarjetasVendedores rutaimg="imgTienda.jpg" titulo="Tienda sumerce" descripcionTienda="30 años en servicio"></TarjetasVendedores>
        <TarjetasVendedores rutaimg="imgTienda.jpg" titulo="Tienda sumerce" descripcionTienda="30 años en servicio"></TarjetasVendedores>
        <TarjetasVendedores rutaimg="imgTienda.jpg" titulo="Tienda sumerce" descripcionTienda="30 años en servicio"></TarjetasVendedores>
      </div>


      
    </div>
  );

}


export default Vendedores;
