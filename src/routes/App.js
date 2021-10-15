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
import {comprobarToken} from '../connection/helpers/comprobarToken'
import moment from 'moment';
import 'moment/locale/es'

moment.locale('es')
comprobarToken()

function App() {
  
  return (
    <Provider store={store}>
    <BrowserRouter> 
    <Row>
   <Col md="auto"><div>
         <Navegacion/>
       </div>
   </Col>
   <Col>
   <Container>
       <Switch>
         <Route exact path="/" component={MostrarVacunas}></Route>
         <Route exact path="/IniciarSesion" component={IniciarSesion}></Route>
         <Route exact path="/CerrarSesion" component={CerrarSesion}></Route>
         <Route exact path="/CrearCuenta" component={CrearCuenta}></Route>
         <Route exact path="/MostrarVacunas" component={MostrarVacunas}></Route>
         <Route exact path="/ModificarVacunas" component={ModificarVacunas}></Route>
         <Route exact path="/RegistrarVacunas" component={RegistrarVacunas}></Route>
         <RutaPrivada exact path="/PaginaAdministrativa" component={PaginaAdministrativa}></RutaPrivada>          
       </Switch>
     </Container>
   </Col>
 </Row>    
     
   </BrowserRouter>

 </Provider>
  
   
  );
}

export default App;
