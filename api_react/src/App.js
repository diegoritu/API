import React from 'react';

import './App.css';
import Header from './Header'
import Footer from './Footer'
import Home from './Home/Home'
import HomeAdmin from './Home/HomeAdmin'

import Registro from './Home/Registro'

import Reclamos from './Reclamos/Reclamos'
import Reclamo from './Reclamos/Reclamo'
import ReclamoForm from './Reclamos/ReclamoForm'
import Personas from './Personas/Personas'
import Persona from './Personas/Persona'
import Edificios from './Edificios/Edificios'
import Habitantes from './Edificios/Habitantes'
import Habilitados from './Edificios/Habilitados';

import ReclamosPorEdificio from './Edificios/ReclamosPorEdificio'


import { Route, BrowserRouter as Router } from 'react-router-dom'
import TodosLosReclamos from './Reclamos/TodosLosReclamos';
import AgregarDueño from './Unidades/AgregarDueño';
import AgregarInquilino from './Unidades/AgregarInquilino';
import DueñosEdificio from './Edificios/DueñosEdificio';
import InquilinosPorUnidad from './Unidades/InquilinosPorUnidad';
import Transferir from './Unidades/Transferir';
import ReclamosPorPersona from './Reclamos/ReclamosPorPersona';
import UnidadesPorInquilino from './Unidades/UnidadesPorInquilino';
import UnidadesPorDueño from './Unidades/UnidadesPorDueño';
import Alquilar from './Unidades/Alquilar';

function App() {

  return (
    <div className="App">
       <Router>
			<Header />
				<Route exact path="/" component={Home} />
				<Route  path="/home" component={Home} />
				<Route  path="/homeAdmin" component={HomeAdmin} />
				<Route  path="/registro" component={Registro} />
				<Route  path="/personas" component={Personas} />
				<Route  path="/persona/:id" component={Persona} />
				<Route  path="/reclamos" component={Reclamos} />

				<Route  path="/habitantesPorEdificio" component={Habitantes} />
				<Route  path="/recPorEd" component={ReclamosPorEdificio} />
				<Route  path="/verReclamos" component={TodosLosReclamos} />
				<Route  path="/agregarDueño" component={AgregarDueño} />
				<Route  path="/habilitadosPorEdificio" component={Habilitados} />
				<Route  path="/agregarInquilino" component={AgregarInquilino} />
				<Route  path="/dueñosPorEdificio" component={DueñosEdificio} />
				<Route  path="/inquilinosPorUnidad" component={InquilinosPorUnidad} />
				<Route  path="/transferir" component={Transferir} />
				<Route  path="/transferir" component={Transferir} />


				<Route  path="/reclamo/:id" component={Reclamo} />
				<Route  path="/nuevo-reclamo" component={ReclamoForm} />
				<Route  path="/recPorPers" component={ReclamosPorPersona} />
				<Route  path="/unidadesAlquiladas" component={UnidadesPorInquilino} />
				<Route  path="/unidadesPropias" component={UnidadesPorDueño} />
				<Route  path="/alquilarUnidad" component={Alquilar} />

		</Router>
       <Footer />
    </div>
  );
}

export default App;
