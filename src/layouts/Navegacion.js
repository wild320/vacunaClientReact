import React from "react";
import { Container, Nav} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { cerrarSesion } from '../connection/helpers/autenticacionAcciones'

function Navegacion() {
    const conectado =true//useSelector(state => state.auth.conectado)
    const usuario = useSelector(state => state.auth.usuario)
    const dispatch = useDispatch()

    return (

        <Nav defaultActiveKey="/" className="flex--sm-column" variant="pills">
         <Container>
                <h3>Menú</h3>
                <Nav.Link href="/" >Pagina Principal</Nav.Link>
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
                            <Nav.Link eventKey="link-6
                            7" as={NavLink} to={'/PaginaAdministrativa'} >Pagina Administrativa</Nav.Link>
                        </React.Fragment>
                    )}
            </Container>
        </Nav >
    )
}

export { Navegacion }
