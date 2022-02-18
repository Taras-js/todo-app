import { combineReducers } from "redux";
import {todoReducer} from "./todoReducer";
import {homeReducer} from "./homeReducer";
export default combineReducers({

    todo: todoReducer,
    home: homeReducer

})