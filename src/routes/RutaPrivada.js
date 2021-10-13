import React from 'react'
import { useSelector } from 'react-redux'
import { Route,Redirect } from 'react-router-dom'

function RutaPrivada({component:Componente,...restoPro}) {

    const conectado = useSelector(state => state.auth.conectado)

    return (
        <Route
            {...restoPro}
            render={
            (propiedades) => conectado === true ? <Componente {...propiedades} />  : <Redirect to="/IniciarSesion"/>
            }
         />
    )
}

export  {RutaPrivada}
