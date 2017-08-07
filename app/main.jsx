import ReactDOM from 'react-dom';
import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer  from './reducers/index.js';
import io from 'socket.io-client';
import { receiveWarriors, chooseOpponents, notify } from 'Actions';
import { Provider } from 'react-redux';
import Content from 'Components/content';

// ================================================================
// use the logger middleware
// ================================================================
const loggerMiddleware = createLogger();
const store = createStore(
	reducer,
    composeWithDevTools(
        applyMiddleware(
            loggerMiddleware
        )
    )
);

// ================================================================
// initial socket connection
// ================================================================
const socket = io.connect('ws://:3000');

let initialConnectionMade = false;

socket.on('connect', () => {
	if (!initialConnectionMade) {
		store.dispatch(notify('Welcome to Deathmatch!', 'success'));
		initialConnectionMade = true;
	}
});

let initialDataReceived = false;

socket.on('allWarriorsData', (warriors) => {
	store.dispatch(receiveWarriors(warriors));
	if (!initialDataReceived) {
		store.dispatch(chooseOpponents());
		initialDataReceived = true;
	}
});

socket.on('tooManyRequests', () => {
	store.dispatch(notify('No cheating! You have been disconnected.', 'error'));
});


// ================================================================
// render
// ================================================================
ReactDOM.render(
  <Provider store={store}>
  	<Content socket={socket} />
  </Provider>,
  document.getElementById('app')
);