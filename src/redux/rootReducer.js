import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './reducer/authReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const rootReducer = combineReducers({
    auth: auth,
});

export default persistReducer(persistConfig, rootReducer);
