import {legacy_createStore,applyMiddleware,combineReducers,compose} from "redux"
import thunk from "redux-thunk"

let RootReducers=combineReducers({

})
let Enhancer=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()|| compose
export let store=legacy_createStore(RootReducers,Enhancer(applyMiddleware(thunk)))

