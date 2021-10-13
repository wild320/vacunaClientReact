import jwt_decode from 'jwt-decode'
import {store} from '../../store'
import { cerrarSesion, setUsuarioActual } from './autenticacionAcciones'
import setAutenticacionToken from './setAutenticacionToken'

const comprobarToken = () => {
   if(localStorage.jwtToken) {
       setAutenticacionToken(localStorage.jwtToken)
        const decodificado=jwt_decode(localStorage.jwtToken)
            store.dispatch(setUsuarioActual({
            usuario:decodificado,
            conectado:true


            }))
            const tiempoActual =Math.floor(Date.now()/1000)
    if(decodificado.exp <= tiempoActual){
        store.dispatch(cerrarSesion())
        Window.location.href="/iniciarSesion"
    }
    
    }
}
export{comprobarToken}