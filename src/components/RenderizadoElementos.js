import React from 'react'; 

class RenderizadoElementos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            estaciones: ["Verano","Otoño","Invierno","Primavera"],
        }
    }
    render() {
        return (
        <div>
            <h2>Renderizado de Elementos</h2>
            <p>
            <ol> 
                {this.state.estaciones.map((el,index)=>
                <li key={index}>{el}</li> // Muestro la lista de estaciones en lista ordenada
                )}
            </ol>
            </p>
            </div>
        );
    }   
}

export default RenderizadoElementos;