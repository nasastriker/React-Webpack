//подключенная библиотека
import { combineReducers } from 'redux';
//подключен файл
import userReducer from './userReducer';

const reducers = combineReducers({
	user: userReducer
});

export default reducers;