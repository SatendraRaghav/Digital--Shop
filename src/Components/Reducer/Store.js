import reducer from "./Reducer";
import { combineReducers, legacy_createStore } from "redux";
// import { legacy_createStore as createStore} from 'redux'
const rootReducer = combineReducers({
    reducer:reducer
});

export const store = legacy_createStore(rootReducer)