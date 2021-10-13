import axios from "axios"
import { LOGIN_ENDPOINT,REGISTRO_ENDPOINT} from "../helpers/endpoints";

import jwt_decode from 'jwt-decode'
import setAutenticacionToken from "../helpers/setAutenticacionToken";
import { SET_USUARIO_ACTUAL } from "../../reducers/tipos";

export const loginUsuario=(datosUsuario) => dispatch => {

    return new Promise((resolve, reject) => {
        axios.post(LOGIN_ENDPOINT, datosUsuario, {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
        }).then(response => {

            const{authorization} = response.headers;

            localStorage.setItem('jwtToken', authorization);

            setAutenticacionToken(authorization);

            const decodificado= jwt_decode(authorization); 

            dispatch(setUsuarioActual({usuario:decodificado, conectado:true}))

            resolve(response);
            
        }).catch(err => {
            reject(err);
        })
    })
}

export const setUsuarioActual = ({usuario, conectado})=> {
    return{
        type:SET_USUARIO_ACTUAL,
        payload: {usuario, conectado},
    }
}


export const cerrarSesion = () => dispatch => {
    localStorage.removeItem('jwtToken');

    setAutenticacionToken(false);

    dispatch(setUsuarioActual({
        usuario:{},
        conectado:false
    }));
}


export const registroUsuario=(datosUsuario) => dispatch => {

    return new Promise((resolve, reject) => {
        axios.post(REGISTRO_ENDPOINT, datosUsuario, {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
        }).then(response => {          
            resolve(response);            
        }).catch(err => {
            reject(err);
        })
    })
}








