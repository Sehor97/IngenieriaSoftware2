import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
import Home from './Home';

class Navegation extends Component {


  render(){
    return (
    <Router>
      <div className= "App">
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">PROGRAMACION</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
         <ul className="navbar-nav mr-auto">
           <li className="nav-item">
            <a className="dropdown-item"  ><Link to="/">HOME</Link></a>
           </li>
         </ul>
         <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"  id="ventaDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">VENTAS</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item"  ><Link to="/crearp">CREAR</Link></a>
                  <a className="dropdown-item"  ><Link to="/consultp">CONSULTAR</Link></a>
                  <a className="dropdown-item"  ><Link to="/buscarp">BUSCAR</Link></a>
                </div>
            </li>
        </ul>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"  id="ventaDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ALQUILER</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item"  ><Link to="/crearp">CREAR</Link></a>
                  <a className="dropdown-item"  ><Link to="/consultp">CONSULTAR</Link></a>
                  <a className="dropdown-item"  ><Link to="/buscarp">BUSCAR</Link></a>
                </div>
            </li>
        </ul>
        </nav>
        </div>
        </div>
  
          <hr />
  
          {/*
   
          */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/crearp">
              <IngresarPelicula />
            </Route>
            <Route path="/consultp">
              <ConsultarPelicula />
            </Route>
            <Route path="/buscarp">
              <BuscaraPelicula />
            </Route>
          </Switch>
          
      </Router>
    );
  }
}
export default Navegation;
