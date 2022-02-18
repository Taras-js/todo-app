import { combineReducers } from "redux";
import {todoReducer} from "./todoReducer";
import {homeReducer} from "./homeReducer";
const rootReducer = combineReducers({

    todo: todoReducer,
    home: homeReducer

})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;