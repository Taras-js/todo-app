import * as types from '../types'
import HomeState from "../../interfaces/interface-redux";
const initialState: HomeState = {
    homeTitle: 'Описание приложения (список todo в формате Single Page Application):',
    loading: false,
    error: null
}
export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TITLE_HOME_PAGE:
            return {
                ...state,
                homeTitle: [...action.payload],
                loading: false,
                error: null

            }
        default:
            return state
    }

}