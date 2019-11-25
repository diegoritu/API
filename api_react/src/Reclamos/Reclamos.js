import React, {Component} from 'react';

 class Reclamos extends Component {

    constructor(props) {
       super(props);
       this.state  = {
         reclamos: [],
           isLoaded:false,
         documento:""
       }
    }

    componentDidMount() {
      this.documento = localStorage.getItem("documento");

        fetch('http://localhost:8080/apitp/getReclamosPorPersona?documento=' + this.documento)
        .then((res) => res.json()).then((json) => {
           this.setState({
            isLoaded: true,
            reclamos: json
          });
        }).catch((error) =>{
          alert("Error en API" + error);
        });
    }

    handlerClickItem(id) {
       this.props.history.push('/reclamo/' + id)
    }

  render() {

    var  {isLoaded, reclamos} =this.state;

    if(!isLoaded) {
        return <div>Loading...</div>
    }
   else
   {
    return (
      <div>
      <ul className="listReclamos">
               {
                  reclamos.map(item => (
                     <li key={item.id} onClick={this.handlerClickItem.bind(this,item.numero)}> #{item.numero} - {item.edificio.nombre}, {item.unidad.piso}° {item.unidad.numero}</li>
                  ))
               }
            </ul>
      </div>
     );
   }
  }
}
export default Reclamos;