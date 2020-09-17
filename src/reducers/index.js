import { combineReducers } from 'redux';
import { recipesReducer } from './recipesReducer';
import { favoriteReducer } from './favoriteReducer';

export const rootReducer = combineReducers ({
    recipesReducer,
    favoriteReducer
});