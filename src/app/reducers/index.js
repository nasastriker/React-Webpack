//подключенная библиотека
import { combineReducers } from 'redux';
//подключен файл
import userReducer from './userReducer';
import userSearchReducer from './userSearchReducer';
import singleUserReducer from './singleUserReducer';

const reducers = combineReducers({
	user: singleUserReducer,
	users: userReducer,
	userSearch: userSearchReducer
});

export default reducers;