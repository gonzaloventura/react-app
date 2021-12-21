import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';

function App() {
  let auth = false;
  let estaciones = ["Verano","Otoño","Invierno","Primavera"];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola Mundo!</h1> 
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />
        <p>
          {auth = true}
          {auth ? "Estas conectado":"Estás desconectado"}
          <ul>
            {estaciones.map((el,index)=>
            <li key={index}>{el}</li>
            )}
          </ul>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      <section>
        <Componente msg="Hola soy un componente func expresa desde una prop" />
        <br />
        <Propiedades 
        cadena="Esto es una cadena de texto"
        numero={19}
        booleano={true}
        array = {[1,2,3]} />
        <br />
      </section>
      </header>
    </div>
  );
}

export default App;
