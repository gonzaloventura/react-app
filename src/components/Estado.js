import React, {Component} from 'react';

function EstadoAHijo(props) {
    return(
        <div>
            <h2>{props.contadorHijo}</h2>
        </div>
    );
} 

export default class Estado extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }
    };
    //setInterval(() => {
    //    this.setState({
    //        contador: this.state.contador + 1,
    //}, 1000);
    //});
//}

    
 render(){
        return(
            <div>
                <h2>Estado</h2>
                <p>
                    {this.state.contador}
                    <EstadoAHijo contadorHijo={this.state.contador} />
                </p>
            </div>
        );
    }
}