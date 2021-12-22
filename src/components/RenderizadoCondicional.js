import React from 'react';

function Login () {
  return(
    <div>
      <h1>Login</h1>
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <button>Login</button>
        </form>
    </div>
  )
}

function Logout () {
  return(
    <div>
      <h1>Logout</h1>
    </div>
  )
}

export default class RenderizadoCondicional extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        }
    }
    render() {
        return (
            <div>
                <h2>Renderizado condicional</h2>
                <p>
                    {this.props.numero % 2 === 0 ? "Par" : "Impar"}
                </p>
                {this.state.isLogged ? <Logout /> : <Login />}
            </div>
        );
    }
}