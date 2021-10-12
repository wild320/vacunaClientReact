import React from "react";
import { Container, Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom';

function Navegacion() {
    return (
        <Nav defaultActiveKey="/home" variant="pills" className="flex-sm-column" >
            <Container>
                <h3>Menú</h3>           

                <Nav.Link href="/home" >Pagina Principal</Nav.Link>
                <Nav.Link eventKey="link-1" as={NavLink} to={'/CrearCuenta'} >Crear Cuenta</Nav.Link>
                <Nav.Link eventKey="link-2" as={NavLink} to={'/IniciarSesion'} >Iniciar Sesion</Nav.Link>
                <Nav.Link eventKey="link-3" as={NavLink} to={'/RegistrarVacunas'} >Registrar Vacunas</Nav.Link>
                <Nav.Link eventKey="link-4" as={NavLink} to={'/ModificarVacunas'} >Modificar vacunas</Nav.Link>
                <Nav.Link eventKey="link-5" as={NavLink} to={'/MostrarVacunas'} >Mostrar Vacunas</Nav.Link>
                <Nav.Link eventKey="link-6"as={NavLink} to={'/CerrarSesion'} >Cerrar Sesion</Nav.Link>
                <Nav.Link as={NavLink} to={'/PaginaAdministrativa'} eventKey="disabled" disabled>Pagina Administrativa</Nav.Link>


            </Container>
        </Nav >






    )
}

export { Navegacion }
