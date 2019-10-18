import React,{Component} from 'react';
import './App.css';
import './css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import IngresarPelicula from './Alquiler/IngresarPelicula';
import ConsultarPelicula from './Alquiler/ConsultarPelicula';
import BuscarPelicula from './Alquiler/BucarPelicula';

class GestionAlquilerPelicula extends Component {

  Ingresar = () =>{
    ReactDOM.render(<IngresarPelicula />, document.getElementById('main'));
  }
 

  Consultar = () =>{
    ReactDOM.render(<ConsultarPelicula />, document.getElementById('main'));
  }

  
  Buscar = () =>{
    ReactDOM.render(<BuscarPelicula/>, document.getElementById('main'));
  }



  render(){
      return(
        <div>
          <button className="btn btn-warning" value="" onClick={this.Ingresar} >Ingresar Nueva Pelicula</button>
          &nbsp;
          &nbsp;
          <button className="btn btn-warning" value="" onClick={this.Consultar} >Consultar Pelicula</button>
          &nbsp;
          &nbsp;
          <button className="btn btn-warning" value="" onClick={this.Buscar} >Buscar Pelicula</button>

      </div>
      );
  }
}
export default GestionAlquilerPelicula;