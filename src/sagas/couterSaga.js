import { put, takeEvery } from 'redux-saga/effects';

import {
COUTER_ADDITION,
COUTER_SUBTRACTION
} from './../constants/ActionTypes';


function* increment(){
    console.log('moment--: InCrement');
}

export function* watchIncrement(){
    yield takeEvery(COUTER_ADDITION, increment)
}

function* decrement(){
    console.log('moment--: DEcrement');
}

export function* watchDecrement(){
    yield takeEvery(COUTER_SUBTRACTION, decrement)
}

