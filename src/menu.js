import React,{Component} from 'react';
import './App.css';
import './css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import GestionVentaPelicula from './GestionVentaPelicula';
import GestionAlquilerPelicula from './GestionAlquilerPelicula';
import IngresarPelicula from './Venta/IngresarPelicula';
import ConsultarPelicula from './Venta/ConsultarPelicula';
import IngresaraPelicula from './Alquiler/IngresarPelicula';
import ConsultaraPelicula from './Alquiler/ConsultarPelicula';
import BuscaraPelicula from './Alquiler/BucarPelicula';

class Menu extends Component {

  GestionVentaPelicula = () =>{
    ReactDOM.render(<GestionVentaPelicula/>, document.getElementById('prueba'));
    ReactDOM.render(<div/>, document.getElementById('main'));
  }

  Ingresar = () =>{
    ReactDOM.render(<IngresarPelicula />, document.getElementById('main'));
  }

  Consultar = () =>{
    ReactDOM.render(<ConsultarPelicula />, document.getElementById('main'));
  }


  GestionAlquilerPelicula= () =>{
    ReactDOM.render(<GestionAlquilerPelicula />, document.getElementById('prueba'));
    ReactDOM.render(<div/>, document.getElementById('main'));
  }

  IngresarA = () =>{
    ReactDOM.render(<IngresaraPelicula />, document.getElementById('main'));
  }
 

  ConsultarA = () =>{
    ReactDOM.render(<ConsultaraPelicula />, document.getElementById('main'));
  }

  
  BuscarA = () =>{
    ReactDOM.render(<BuscaraPelicula/>, document.getElementById('main'));
  }



  render(){
      return(
      <div className= "App">
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">PROGRAMACION</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"  id="ventaDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  VENTA
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" onClick={this.Ingresar} >CREAR</a>
                  <a className="dropdown-item" onClick={this.Consultar} >CONSULTAR</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"  id="alquilerDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  ALQUILER
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" onClick={this.IngresarA} >CREAR</a>
                  <a className="dropdown-item" onClick={this.ConsultarA} >CONSULTAR</a>
                  <a className="dropdown-item" onClick={this.BuscarA} >BUSCAR</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      </div>
      );
  }
}
export default Menu;
