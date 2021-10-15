import React, { useState } from 'react';
import {Form, Button, Container} from "react-bootstrap";

 function IniciarSesionForm({errores, enviarCallback}) {

    const[userName, setUserName]=useState("");
    const[password, setPassword]= useState("");

    const enviarFormulario = (e) => {
        e.preventDefault();
        enviarCallback({userName, password});
    }

    return (
        <Container>
        <Form onSubmit={enviarFormulario}>
            <Form.Group className="margen-t margen-b" controlId="userName">
                <Form.Label>Usuario</Form.Label>
                <Form.Control 
                 type="text"  
                 placeholder="Ingrese su usuario"
                 value={userName}
                 onChange={e=>setUserName(e.target.value)}
                 isInvalid={errores.userName} 
                />

                <Form.Control.Feedback type="invalid">
                    {errores.userName}
                </Form.Control.Feedback>        
            </Form.Group>

            <Form.Group className="margen-b" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Ingrese su contraseña" 
                value={password}
                onChange={e=>setPassword(e.target.value)}
                isInvalid={errores.password}/>

                <Form.Control.Feedback type="invalid">
                    {errores.password}
                </Form.Control.Feedback>
            </Form.Group>
            
            <Button type="submit" variant="primary" className="mt-3">
                Iniciar sesión
            </Button>
            <Form.Check type="checkbox" id="autoSizingCheck2" label="Recuerdame" />
        </Form> 
        </Container>       
    )
}
export default IniciarSesionForm