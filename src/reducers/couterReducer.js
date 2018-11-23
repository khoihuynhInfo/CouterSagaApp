import {
    COUTER_ADDITION,
    COUTER_SUBTRACTION
} from './../constants/ActionTypes';

const initialState = 0;

const couterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUTER_ADDITION:
            console.log('action-', action);
            return parseInt(action.value) + 1;
        case COUTER_SUBTRACTION:
            console.log('action+', action);
            return parseInt(action.value) - 1;
        default:
            return state;
    }
}


export default couterReducer;

