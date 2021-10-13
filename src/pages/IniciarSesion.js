import React, {  useState } from 'react'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'
import {isObjectoVacio} from '../connection/helpers/isObjectoVacio'
import { Link} from 'react-router-dom'
import  IniciarSesionForm  from '../components/Formularios/IniciarSesionForm';
import validator from 'validator'
import { useDispatch } from 'react-redux';
import {loginUsuario} from '../connection/helpers/autenticacionAcciones'


function IniciarSesion() {

    const [errores, setErrores]= useState({});
    const dispatch=useDispatch()

    const login=({userName, password}) => {
        const errores={};
        setErrores(errores);

        if(validator.isEmpty(userName)){
            errores.userName = "El usuario no puede estar vacio";
        }

        if(validator.isEmpty(password)){
            errores.password = "La contraseña no puede estar vacia"
        }
        if(!isObjectoVacio(errores)){
            setErrores(errores);
            return;
        }
        //console.log({userName, password})
        dispatch(loginUsuario({userName, password}))
        .then(response =>{})
        .catch(error=>{
            setErrores({autenticacion:"No Se Puede Iniciar Sesion Con Los Datos Ingresados"});
        });

      
    }

    return (
        <Container sm className="margen-t">
            <Row>
                <Col sm="12" md={{span:8, offset:2}} lg={{span:6, offset:3}} >
                    <Card body>
                        {errores.auth && <Alert variant="danger">{errores.auth}</Alert>}
                        <h3>Iniciar sesión</h3> 
                        <IniciarSesionForm errores={errores} enviarCallback={login}></IniciarSesionForm>
                        <div className="margen-t">
                            <Link to={'/CrearCuenta'}>¿No tienes una cuenta? Registrate aqui</Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default IniciarSesion