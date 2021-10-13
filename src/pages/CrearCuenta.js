import React, { useEffect, useState } from 'react'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link,useHistory } from 'react-router-dom'
import validator from 'validator'
import CrearCuentaForm from '../components/Formularios/CrearCuentaForm';
import { registroUsuario, loginUsuario } from '../connection/helpers/autenticacionAcciones';
import {isObjectoVacio} from '../connection/helpers/isObjectoVacio'


export default function CrearCuenta() {

    const [errores, setErrores]= useState({});
    const dispatch= useDispatch();
    const conectado= useSelector(state=>state.auth.conectado);
    const history=useHistory();

    useEffect(() => {
        if(conectado) {
            history.push("/");
        }
    });

    const register=({userName, password, nombre, correo}) => {
        const errores={};
        setErrores(errores);

        if(validator.isEmpty(nombre)){
            errores.nombre = "El nombre no puede ser vacio";
        }

        if(!validator.isEmail(correo)){
            errores.correo = "El correo electronico es invalido";
        }
        
        if(validator.isEmpty(userName)){
            errores.userName = "El usuario no puede ser vacio";
        }

        if(!validator.isLength(password, {min: 8, max: 30})){
            errores.password = "La contraseña debe tener entre 8 y 30 caracteres";
        }

        if(!isObjectoVacio(errores)){
            setErrores(errores);
            return;
        }

        dispatch(registroUsuario({userName, password, nombre, correo}))
        .then(response=>{
            dispatch(loginUsuario({userName, password}));
        })
        .catch(err=>{
            setErrores({ registroError: err.response.data.message });
        });
    }

    return (

        <Container className="margen-t">
            <Row>
                <Col sm="12" md={{span:8, offset:2}} lg={{span:6, offset:3}} >
                    <Card body>
                        {errores.registroError && <Alert variant="danger">{errores.registroError}</Alert>}
                        <h3>Registrar usuario</h3>
                        <CrearCuentaForm errores={errores} enviarCallback={register}></CrearCuentaForm>
                        <div className="margen-t">
                            <Link to={'/IniciarSesion'}>¿Ya tienes una cuenta? Iniciar sesion aqui</Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}


