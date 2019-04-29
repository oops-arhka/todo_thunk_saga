import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    rootElement
);

