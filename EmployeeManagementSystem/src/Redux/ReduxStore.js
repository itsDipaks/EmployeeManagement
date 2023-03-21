import {legacy_createStore,applyMiddleware,combineReducers,compose} from "redux"
import thunk from "redux-thunk"
import { AuthReducer } from "./Auth/Auth.reducer"
import { EmployeeReducer } from "./Employee/Employee.reducer"

let RootReducers=combineReducers({
Auth:AuthReducer,
Storedata:EmployeeReducer
})

const createComposer= compose;

export const store = legacy_createStore(RootReducers, createComposer(applyMiddleware(thunk)));