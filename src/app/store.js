import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import logger from 'redux-logger';
import '../css/style.styl';

const middleware = applyMiddleware(logger());
const store = createStore(reducers, middleware);

export default store;

// store.subscribe(() => {
//     console.dir(store.getState())
// })

// store.dispatch({
//     type: 'CHANGE_NAME',
//     payload: "NewName"
// })
// store.dispatch({
//     type: 'CHANGE_LASTNAME',
//     payload: "NewLastName"
// })