import 'babel-polyfill';
import {Person} from './model/Person';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';
import { selectSubreddit, fetchPosts } from './actions';
import $ from 'jquery';

const loggerMiddleware = createLogger();

const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
);

global.app = function () {

    var christoph = new Person('Christoph', 'Burgdorf');

    store.dispatch(selectSubreddit('reactjs'))
    store.dispatch(fetchPosts('reactjs')).then(() =>
        console.log(store.getState())
    )

};

