import React from 'react';
import PropTypes from 'prop-types';

export default function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "Verdadero":"Falso"}</li>
                <li>Array: {props.array.join(",")}</li>
                <li>Al cuadrado: {props.array.map(props.funcion).join(",")}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
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