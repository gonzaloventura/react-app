import React from 'react';
import '../App.css';

function Card(props){
    return (
        <div className="Tarjeta">
        <h2>{props.title} </h2>
        <p>
            {props.text}
        </p>
        </div>
    );
}

export default Card;