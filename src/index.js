import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';


// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeLatest, put } from "redux-saga/effects";

//make reducers:
const gifs = (state = [], action) => { 
    // if (action.type === 'GET_GIFS') {
    //     return Number(action.payload);
    // }
    return state;
};

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//make a store for reducers:
const gifsStore = createStore(
    combineReducers({
        gifs
    }),
    applyMiddleware(logger, sagaMiddleware)
);
// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

// Create the rootSaga generator function
function* rootSaga() {
    yield takeLatest('NAME !', fetchGifs)
}

// SAGA functions:
function* fetchGifs() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/fruit'
        })
        console.log('>>>>>>>', response.data);

        //const theBasket = response.data;
        yield put({
            type: 'SET_GIFS',
            payload: response.data
        })
    } catch (error) {
        console.log('Something broke SAGA/GET', error)
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={gifsStore}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
