import {legacy_createStore,applyMiddleware,combineReducers,compose} from "redux"
import thunk from "redux-thunk"
import { AuthReducer } from "./Auth/Auth.reducer"
import { EmployeeReducer } from "./Employee/Employee.reducer"
import { ProjectReducer } from "./Project/Project.reducer"
import { FeedsReducer } from "./Feeds/Feeds.reducer"

let RootReducers=combineReducers({
Auth:AuthReducer,
Storedata:EmployeeReducer,
ProjectsData:ProjectReducer,
FeedsData:FeedsReducer
})

const createComposer= compose;

export const store = legacy_createStore(RootReducers, createComposer(applyMiddleware(thunk)));