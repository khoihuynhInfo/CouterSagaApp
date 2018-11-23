import { all } from 'redux-saga/effects';
import {
    watchIncrement,
    watchDecrement
} from './../sagas/couterSaga';


export default function* rootSagas() {
    yield all([
        watchIncrement(),
        watchDecrement()
    ]);
}