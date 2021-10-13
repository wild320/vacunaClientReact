import { SET_USUARIO_ACTUAL } from "./tipos";

const estadoInicial={conectado:false,usuario:{}}
export default function autenticacionReducer(estado=estadoInicial,accion){

    const{type,payload} =accion

    switch(type){
        case SET_USUARIO_ACTUAL:
            return{
                ...estado,
                conectado: payload.conectado,
                usuario: payload.usuario
            }
            default:
                return estado;
    }
}