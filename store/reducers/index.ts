import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { homeReducer } from "./homeReducer";
const rootReducer = combineReducers({

    todoPage: todoReducer,
    homePage: homeReducer

})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;