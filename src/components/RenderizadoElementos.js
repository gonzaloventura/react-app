import React from 'react'; 
import data from '../helpers/data.json';

function ElementoLista(props){
    return(
        <a href={props.el.web} target="_blank">
            {props.el.name}
        </a>
    )
}

class RenderizadoElementos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            estaciones: ["Primavera", "Verano", "Otoño", "Invierno"],
        }
    };
    render() {
        console.log(data);
        return(
            <div>
                <h2>Renderizado de elementos</h2>
                <ul>
                    {this.state.estaciones.map((el,index)=>
                        <li key={index}>{el}</li>
                    )}
                </ul>
                <li>
                    <h3>Frameworks</h3>
                    <ul>
                        {data.frameworks.map((el,index) => <li>
                            <ElementoLista key={el.id} el={el} />
                        </li>)}
                    </ul>
                </li>
            </div>
        );
    }
}

export default RenderizadoElementos;