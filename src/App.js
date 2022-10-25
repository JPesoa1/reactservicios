import logo from './logo.svg';
import './App.css';
import ServicioCustomers from './components/ServicioCustomers';
import BuscadorCustomers from './components/BuscadorCustomers';
import ServicioCoche from './components/ServicioCoche';
import DepartamentosEmpleados from './components/DepartamentosEmpleados';
import MaestroDepartamento from './components/MaestroDetalle/MaestroDepartamentos';
import TablaMultiplicar from './components/RutasParametros/TablaMultiplicar';
import Router from './components/Router';
import MenuRutas from './components/RutasParametros/MenuRutas';

//importando bootstrap y jquery
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div className="App">
      
      <Router/>
      
    </div>
  );
}

export default App;
