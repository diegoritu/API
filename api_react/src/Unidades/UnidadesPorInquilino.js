import React, {Component} from 'react';

class UnidadesPorInquilino extends Component {
    constructor(props) {
      super(props);
      this.state = {
          documento: "",
          unidades: [],
          isLoaded: false,
        };
  
    }
  
    
    componentDidMount() {
      const {documento} = this.state;
      fetch('http://localhost:8080/apitp/getUnidadesPorInquilino?documento=' + sessionStorage.getItem("documento"))
        .then((res) => res.json()).then((json) => {
           this.setState({
            isLoaded: true,
            unidades: json,
          });
  
        }).catch((error) =>{
          alert("Error en API" + error);
        });
       
    }

  
    render() {
      
      var  {isLoaded, unidades, cargado} = this.state;

    if(!isLoaded) {
        return <div>Cargando...</div>
     }   
     else if (unidades.length == 0)
     {
        return(
          <p>No hay unidades para mostrar.</p>
        );
     }
     else{
      return (
         
          <div>
             <h1>Mis Alquileres</h1>

              <ul className="listUnidades">
             {
               unidades.map(item => { 
                return <li key={item.id}> {item.edificio.nombre}, {item.piso}° {item.numero}</li>
              })
             }
              </ul>
             </div>

            );
        }
     }
  }
  export default UnidadesPorInquilino;