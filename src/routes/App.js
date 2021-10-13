import '../styles/App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navegacion} from '../layouts/Navegacion'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MostrarVacunas from '../pages/MostrarVacunas';
import IniciarSesion from '../pages/IniciarSesion';
import CerrarSesion from '../pages/CerrarSesion';
import CrearCuenta from '../pages/CrearCuenta';
import ModificarVacunas from '../pages/ModificarVacunas';
import RegistrarVacunas from '../pages/RegistrarVacunas';
import PaginaAdministrativa from '../pages/PaginaAdministrativa';
import {RutaPrivada} from './RutaPrivada';
import { Provider } from 'react-redux';
import { store } from '../store';

function App() {
  
  return (
  <Provider store={store}>
     <BrowserRouter> 
      <div>
        <Navegacion/>
      </div> 
      <Container>
        <Switch>
          <Route exact path="/" component={MostrarVacunas}></Route>
          <Route exact path="/IniciarSesion" component={IniciarSesion}></Route>
          <Route exact path="/CerrarSesion" component={CerrarSesion}></Route>
          <Route exact path="/CrearCuenta" component={CrearCuenta}></Route>
          <RutaPrivada path="/ModificarVacunas/ :id" component={ModificarVacunas}></RutaPrivada>
          <RutaPrivada exact path="/RegistrarVacunas" component={RegistrarVacunas}></RutaPrivada>
          <RutaPrivada exact path="/PaginaAdministrativa" component={PaginaAdministrativa}></RutaPrivada>
          
        </Switch>
      </Container>
    </BrowserRouter>

  </Provider>
  
   
  );
}

export default App;
