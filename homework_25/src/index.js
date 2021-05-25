import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/index';
import { Provider } from 'react-redux';

import App from './App';
import reduxThunkMiddleware from 'redux-thunk';
const logger = (storeAPI) => (next) => (action) => {
	console.log('Store before action dispatch', storeAPI.getState());
	console.log('Action dispatch', action);
	const result = next(action);
	console.log('Store after action dispath:', storeAPI.getState());
	return result;
};

// ########   manually middleware manage function  alternative THUNK ########

// const handleAsyncFetchMW = storeAPI => next => action => {

//   if(typeof action==='function'){

//       return action(storeAPI.dispatch)

//   }

//   return next(action)
// }
// ############################################################################
const middleWares = applyMiddleware(
	logger,
	reduxThunkMiddleware
	// handleAsyncFetchMW
);

const store = createStore(reducer, middleWares);

// console.log(store)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
