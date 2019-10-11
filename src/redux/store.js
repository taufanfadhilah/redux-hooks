import { combineReducers, createStore } from "redux";
import UserReducer from './users/reducers'
import TodosReducer from './todos/reducers'

const store = createStore(combineReducers({ UserReducer, TodosReducer }));
export default store