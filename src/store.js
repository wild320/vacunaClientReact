import { applyMiddleware,  createStore } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import combineReducers from "./reducers/combineReducers"

const middleware =[thunk]
const store = createStore(
    combineReducers,
    composeWithDevTools(applyMiddleware(...middleware))


)
export {store}