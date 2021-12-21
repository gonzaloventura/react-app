import React from 'react';

function SumarDividir(valor){
    return (
        <div>
        <h2>Función SumarDividir: </h2>
        {(valor.primero+valor.segundo)/(valor.primero-valor.segundo)}
        </div>
    );
}

export default SumarDividir;