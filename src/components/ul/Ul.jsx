import React from "react";
import './ul.css'; 
import Li from '../li/Li'

function Ul(){
    return(
        <ul className="listadoNavegacion">
            <Li  texto = 'Quienes Somos'/>
            <Li  texto = 'Contacto'/>
            <Li  texto = 'Producto'/>
        </ul>
    ); 
}
export default Ul; 