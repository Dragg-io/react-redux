import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import login from './modules/login';
import photos from './modules/photos';
import localStorage from './middleware/localStorage';

const middleware = [...getDefaultMiddleware(), localStorage];
const reducer = combineReducers({ login, photos });

const store = configureStore({ reducer, middleware });

export default store;
