import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Funciones from './components/Funciones';
import Card from './components/Cards';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';

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
        array = {[1,2,3]}
        objeto = {{nombre: "juan", correo: "juanperez@gmail.com"}}
        funcion = {(num) => num*num} 
        elementoReact = {<i>Esto es un elemento React</i>}
        componenteReact = {<Componente msg = "Soy un componente pasado como props" />}
        
        />
        <br />

        <Funciones primero={50} segundo={24} />

        <br />
      <div className="row">
        <Card 
          title="Hola Mundo!" 
          text="Lorem Ipsum  ipsum dolor amet amet ipsum dolor amet amet ipsum dolor amet amet" 
        />
        <Card 
          title="Hola Mundo!" 
          text="Lorem asd Ipsum  ipsum dolor amet amet ipsum dolor amet amet ipsum dolor amet amet" 
        />

        <Estado msg="Esto es un estado" />

        <RenderizadoCondicional numero={10} />
      </div>
      </section>
      </header>
    </div>
  );
}

export default App;
