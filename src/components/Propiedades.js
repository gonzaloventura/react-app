import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul className="list-group">
                <li className="list-group-item">{props.cadena}</li>
                <li className="list-group-item">{props.numero}</li>
                <li className="list-group-item">{props.booleano ? "Verdadero":"Falso"}</li>
                <li className="list-group-item">Array: {props.array.join(",")}</li>
                <li className="list-group-item">Al cuadrado: {props.array.map(props.funcion).join(",")}</li>
                <li className="list-group-item">{props.objeto.nombre + " - " + props.objeto.correo}</li>
                <li className="list-group-item">{props.elementoReact}</li>
                <li className="list-group-item">{props.componenteReact}</li>
            </ul>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: "Las Props",
}


// Se fija el tipo de la variable si es string, number, boolean, etc..
Propiedades.propTypes = {
    numero: PropTypes.number, // Si se desea que sea requerido: "numero: PropTypes.number.isRequired"
}