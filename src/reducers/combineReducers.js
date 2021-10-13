import { combineReducers } from "redux";
import autenticacionReducer from "./autenticacionReducer"
export default combineReducers({
    auth: autenticacionReducer
})