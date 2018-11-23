import {
    COUTER_ADDITION,
    COUTER_SUBTRACTION
} from './../constants/ActionTypes';

export const additionCouter = value => ({
    type: COUTER_ADDITION,
    value
});

export const subtractionCouter = value => ({
    type: COUTER_SUBTRACTION,
    value
});

