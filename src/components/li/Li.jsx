import React from "react";
import './li.css'; 

function ItemsLi (props){
    return (
        <li className="itemsNavBar"><a  href= '' className="linkNavBar">{props.texto}</a></li>
    ); 
}
export default ItemsLi; 