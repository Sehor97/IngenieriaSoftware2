import React,{Component} from 'react';
import './App.css';
import './css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import IngresarPelicula from './Venta/IngresarPelicula';
import ConsultarPelicula from './Venta/ConsultarPelicula';

class GestionVentaPelicula extends Component {

  Ingresar = () =>{
    ReactDOM.render(<IngresarPelicula />, document.getElementById('main'));
  }

  Consultar = () =>{
    ReactDOM.render(<ConsultarPelicula />, document.getElementById('main'));
  }



  render(){
      return(
        <div>
          <button className="btn btn-warning" value="" onClick={this.Ingresar} >Ingresar Pelicula</button>
          &nbsp;
          &nbsp;
          <button className="btn btn-warning" value="" onClick={this.Consultar} >Consultar Pelicula</button>
        </div>
      );
  }
}
export default GestionVentaPelicula ;