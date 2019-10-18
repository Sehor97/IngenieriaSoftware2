import React,{Component} from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
//import Actualizar from './Actualizar';


class BuscarPelicula extends Component{
  
    constructor(props){
      super(props);
      this.state = {
        error: null,
        peliculas: [],
        response: {},
        
      };
    }
  
    consultar = () => {
      const apiUrl = 'http://localhost/servicios/BuscarPelicula.php';
      fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            peliculas: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
    }
    pagActualizar =()=>{
    ReactDOM.render(<Actualizar></Actualizar>,document.getElementById("main"));
    }

    eliminar = (peliculaId) =>{
      const { peliculas } = this.state;
      const apiUrl = 'http://localhost/servicios/DeleteAlquiler.php';
      const formData =  new FormData();
      formData.append('id',peliculaId);
      alert(peliculaId);
      const option ={
        method: 'POST',
        body: formData
      }
      fetch(apiUrl, option)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            response: result,
            peliculas: peliculas.filter(pelicula => pelicula.id !== peliculaId)
          });
        },
        (error) => {
          this.setState({error});
        }
      )
    }
  
    render() {
      
      const {error, peliculas} = this.state;
      if(error) {
        return (
          <div>Error: {error.message}</div>
        )
      } else {
        return(
            <div className="App">
            Ingrese el id de la película : <input type="text" value={this.id} onChange={(I)=>this.setState({id:I.target.value})}></input>
          <div>
             <h1>Buscar Pelicula </h1>
            <button onClick={this.consultar} className="btn btn-success">CONSULTAR</button>
            &nbsp;
            <br></br>
            <br></br>
            <h2>Peliculas</h2>
            <table className="table">
              <thead>
              <tr>
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>DIRECTOR</th>
                  <th>AÑO</th>
                  <th>STOCK</th>
                  <th>PRECIO</th>
                  <th>ID GENERO</th>
                  <th className="th">OPCIONES</th>
                </tr>
              </thead>
              <tbody>
                {peliculas.map(pelicula =>(
                  <tr key={pelicula.id}>
                    <td>{pelicula.nombre}</td>
                    <td>{pelicula.director}</td>
                    <td>{pelicula.año}</td>
                    <td>{pelicula.stock}</td>
                    <td>{pelicula.precio}</td>
                    <td>{pelicula.id_genero}</td>
                    <td>  
                    <button onClick={() => this.eliminar(pelicula.id)} className="btn btn-danger">ELIMINAR</button>
                    &nbsp;
                    <button onClick={() => this.pagActualizar(pelicula.id)} className="btn btn-info">ACTUALIZAR</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
          </div>
        )

        
      }
    }
    
}
  export default BuscarPelicula;