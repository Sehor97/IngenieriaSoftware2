import React,{Component} from 'reactn';
import '../App.css';

class ActualizarE extends Component{
  
    constructor(props){
      super(props);
      this.state = {id:0,nombre:"", director:"",
      año:"",stock:0 ,email:"",precio:0,id_genero:"",
      resp:{datos:[]},respcadena:""};
    }
  

    actualizar = () =>{
      const apiUrl = 'http://localhost/serviciosPelicula/ActualizarPelicula.php';
      const formData =  new FormData();
      //alert(this.state.tipo_id + this.state.nombre + this.state.apellido + this.state.telefono + this.state.direccion + this.state.email + this.state.id_empresa + this.state.cargo +this.state.salario );
      formData.append('id', this.state.id);
      formData.append('nombre', this.state.nombre);
      formData.append('director', this.state.director);
      formData.append('año', this.state.año);
      formData.append('stock', this.state.stock);
      formData.append('precio', this.state.precio);
      formData.append('id_genero', this.state.id_genero);

      
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
          });
        },
        (error) => {
          this.setState({error});
        }
      )
    }
     cargar(){
      var n= parseInt(this.global.ids); 
      const apiUrl = 'http://localhost/serviciosPelicula/consultarPeliculaID.php';
      const formData =  new FormData();
      formData.append('id',n);
      const option ={
      method: 'POST',
      body: formData
}
      fetch(apiUrl,option)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            peliculas: result,
            id: result[0].id,
            nombre: result[0].nombre,
            director: result[0].director,
            año: result[0].año,
            stock: result[0].stock,
            precio: result[0].precio,
            id_genero: result[0].id_genero
            
            
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
     }
     componentDidMount(){
       this.cargar();
     }
  
  
  
    render() {
      return (
        <div className="App">
            
            <div className="card">
              <form>
              <div className="form-group">
                  <label>ID</label>
                  <input type="number" className="form-control" placeholder="Enter ID"/>
                </div>
                
               
                <div className="form-group">
                  <label>Nombre</label>
                  <input type="text" className="form-control" value={this.state.nombre} onChange={(nom)=> this.setState({nombre:nom.target.value})} placeholder="Ingrese el nombre de la película"/>
                </div>
                <div className="form-group">
                  <label>Director</label>
                  <input type="text" className="form-control" value={this.state.director} onChange={(dir)=> this.setState({director:dir.target.value})} placeholder="Ingrese el nombre del director"/>
                </div>
                
                <div className="form-group">
                  <label>Año</label>
                  <input type="text" className="form-control" value={this.state.año} onChange={(a)=> this.setState({año:a.target.value})} placeholder="Ingrese el año de creación de la película"/>
                </div>
                <div className="form-group">
                  <label>Stock</label>
                  <input type="number" className="form-control" value={this.state.stock}  onChange={(st)=> this.setState({stock:st.target.value})} placeholder="Ingrese la cantidad que hay en existencia"/>
                </div>
                <div className="form-group">
                  <label>Precio</label>
                  <input type="number" className="form-control" value={this.state.precio} onChange={(pre)=> this.setState({precio:pre.target.value})} placeholder="Ingrese el valor de la pelícila"/>
                </div>
                <div className="form-group">
                  <label>ID GENERO</label>
                  <input type="number" className="form-control" value={this.state.id_genero} onChange={(IDE)=> this.setState({id_genero:IDE.target.value})} placeholder="Ingrese el ID del género al que pertenece"/>
                </div>
                <button  className="btn btn-success" onClick={() => this.actualizar()}>actualizar</button>
              </form>
            </div>  
        </div>
      );
      
    }
  }
  export default ActualizarE;
  