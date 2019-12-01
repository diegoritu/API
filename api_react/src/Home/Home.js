import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		usuario: "",
		password: "",
		loginErrors: ""
	  };
  
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleChange = this.handleChange.bind(this);
	}
  
	handleChange(event) {
	  this.setState({
		[event.target.name]: event.target.value
	  });
	}
  
	handleSubmit(event) {
	  const { usuario, password } = this.state;
	  fetch('http://localhost:8080/apitp/getPersonaPorUsuario?usuario=' + usuario + "&password=" + password)
	  .then((res) => res.json()).then((json) => {
			if(json === null)
			{
				alert("Usuario y/o contraseña incorrectos.");
			}	
			else
			{	
				if(json.activo === false)
				{
					alert("Usuario inexistente");
				}
				else
				{
					sessionStorage.setItem("usuario", json.usuario);
					sessionStorage.setItem("administrador", json.administrador);
					sessionStorage.setItem("documento", json.documento);					
					sessionStorage.setItem("nombre", json.nombre);				


				}
				
			}
		 this.setState({
		  persona: json,
		});
  
	  }).catch((error) =>{
		alert("Error en API" + error);
	  });
	  
	  event.preventDefault();
	}
  
	render() {

	  if(sessionStorage.getItem("usuario"))
	  {

		if(sessionStorage.getItem("administrador") === "true")
		{

			return (
				window.location = '/homeAdmin'
				
			);

		}
		else
		{	
			return (
				window.location = '/reclamos'			
			);

		}
	  }
	  else
	  {
		return (
			<div>
			  <form onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="col-md-2">
						<label>Usuario</label>
					</div>
					<div className="col-md-10">
						<input type="text" name="usuario" placeholder="Usuario" value={this.state.usuario} onChange={this.handleChange} required />
					</div>
					<div className="col-md-2">
						<label>Contraseña</label>
					</div>
					<div className="col-md-10">
						<input type="password" name="password" placeholder="Contraseña" value={this.state.password} onChange={this.handleChange} required />
					</div>
				</div>
	  
	  
				<button type="submit">Login</button>
				<div>
				<button>
				<Link to="/registro">Registro</Link>
				</button>
				</div>
			  </form>
			</div>
		  );
	  }

	  
	}
  }