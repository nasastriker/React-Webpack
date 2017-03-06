import { createStore } from 'redux';

import reducers from './reducers'
import '../css/style.styl';

const store = createStore(reducers);

store.subscribe(() => {
    console.dir(store.getState())
})

store.dispatch({
    type: 'CHANGE_NAME',
    payload: "NewName"
})
store.dispatch({
    type: 'CHANGE_LASTNAME',
    payload: "NewLastName"
})
