import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { cerrarSesion } from '../connection/helpers/autenticacionAcciones'

function Navegacion() {
    const conectado = useSelector(state => state.auth.conectado)
    const usuario = useSelector(state => state.auth.usuario)
    const dispatch = useDispatch()

    return (
        <Navbar bg='info' defaultActiveKey="/home" variant="pills" className="flex-sm-column" >
            <Container>


                <h3>Menú</h3>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link href="/home" >Pagina Principal</Nav.Link>
                    {conectado &&
                        <Nav.Link eventKey="link-3" as={NavLink} to={'/RegistrarVacunas'} >Registrar Vacunas</Nav.Link>

                    }
                    {!conectado ? (
                        <React.Fragment>
                            <Nav.Link eventKey="link-1" as={NavLink} to={'/CrearCuenta'} >Crear Cuenta</Nav.Link>
                            <Nav.Link eventKey="link-2" as={NavLink} to={'/IniciarSesion'} >Iniciar Sesion</Nav.Link>

                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Nav.Link eventKey="link-4" as={NavLink} to={'/ModificarVacunas'} >Modificar vacunas</Nav.Link>
                            <Nav.Link eventKey="link-5" as={NavLink} to={'/MostrarVacunas'} >Mostrar Vacunas</Nav.Link>
                            <Nav.Link title={usuario.sub} onClick={() => dispatch(cerrarSesion)} eventKey="link-6" as={NavLink} to={'/CerrarSesion'} >Cerrar Sesion</Nav.Link>
                            <Nav.Link as={NavLink} to={'/PaginaAdministrativa'} eventKey="disabled" disabled>Pagina Administrativa</Nav.Link>
                        </React.Fragment>
                    )}


                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export { Navegacion }
