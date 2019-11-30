import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class DueñosPorUnidad extends Component {
   constructor(props) {
      super(props);
      this.state  = {
        edificios: [],
        unidades: [],
        dueños: [],
        cargar: false,
        isLoaded:false
      }
      this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleChange = this.handleChange.bind(this);
   }
   componentDidMount() {
    fetch('http://localhost:8080/apitp/getEdificios')
    .then((res) => res.json()).then((json) => {
       this.setState({
        isLoaded: true,
        edificios: json
      });
    }).catch((error) =>{
      alert("Error en API" + error);
    });
 }
   handleChange = (event) => {
    var valorSel = event.target.value;

    if(event.target.id === 'listaEdificios'){
        this.setState({codigo: valorSel})
        fetch('http://localhost:8080/apitp/getUnidadesPorEdificio?codigo=' + valorSel)
        .then((res) => res.json()).then((json) => {
        this.setState({
            isLoaded: true,
            unidades: json
        });
        }).catch((error) =>{
        alert("Error en API" + error);
        });
    }
        
};

handleSubmit = (event) => {
      event.preventDefault();

      var edificio = document.getElementById("listaEdificios").value;
      var documento = null;
      var piso = null;
      var numero = null;

      if(edificio != -1)
      {
         var unidad = document.getElementById("listaUnidades").value;
         if(unidad == 0)
         {
            unidad = null;
         }

         if(unidad == -1)
         {
            alert("Debe seleccionar una unidad");
         }
         else
         {
            if(unidad != 0)
            {
               this.state.unidades.forEach(function(un){
                  if(un.piso + "° " + un.numero == unidad)
                  {
                     piso = un.piso;
                     numero = un.numero;
                  }
               });
            fetch('http://localhost:8080/apitp/getDueniosPorUnidad?codigo=' + edificio + '&piso=' + piso + '&numero=' + numero)
            .then((res) => res.json()).then((json) => {
               this.setState({
               dueños: json,

               cargar: true
            });
            }).catch((error) =>{
            alert("Error en API" + error);
            });
         }
            
            
         }
      }
   }

   handlerClickItem(id){
      this.props.history.push('/persona/' + id);
   }

  render() {
      var  {isLoaded, edificios, unidades: unidadesListadas, dueños, cargar} = this.state;

      if(!isLoaded) {
         return <div>Cargando...</div>
      }
      else
      {
         if(cargar === false){
         return (
            <form onSubmit={this.handleSubmit}>
                <h1>Dueños Por Unidad</h1>
               <select id="listaEdificios" onChange={this.handleChange}>
                  <option value="-1">Seleccione un edificio</option>

                  {
                     edificios.map(item => (
                        <option value={item.codigo}>{item.nombre}</option>

                     ))
                  }
               </select>
               <select id="listaUnidades" onChange={this.handleChange}>
                  <option value="-1">Seleccione una unidad</option>

                  {
                     unidadesListadas.map(item => (
                     <option value={item.identificador}> {item.piso}° {item.numero}</option>

                     ))
                  } 
               </select>
               <input type="submit" value="Buscar" />
            </form>
         );
      }
      else if(cargar === true){
         if(!isLoaded) {
            return <div>Cargando...</div>
        }
       else
       {
         if (dueños.length === 0)
         {
            return(
                <div>
              <h1>Dueños Por Unidad</h1>
              <p>Esta unidad no tiene dueños.</p>
                </div>
            );
         }
         else{
            return(
                <div>
                <h1>Dueños Por Unidad</h1>
               <ul className="listaDueños">
                  {
                  dueños.map(item => (
                     <li key={item.id} onClick={this.handlerClickItem.bind(this,item.documento)}> {item.nombre}</li>
                  ))
                  }

               </ul>
               </div>
            );
         }
      }
   }
}
}
}
export default DueñosPorUnidad;