//Importo React o sino se importa se puede utilizar como React.Componente
import React, {Component} from "react";

// Expresada por arrow function =>
const Componente = (props) => <h2>{props.msg}</h2> 


//Expresado a través de función
/*function Componente(props){
    return <h2>{props.msg}</h2>;
}*/ 


// Expresado a través de Clases
/* class Componente extends Component{
    render(){
        return(
            <h2>{this.props.msg}</h2>
        )
    }
}*/ 

export default Componente;