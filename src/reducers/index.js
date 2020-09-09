import { recipesReducer } from './recipesReducer';
import { favoriteReducer } from './favoriteReducer';

export const rootReducer = combineReducer ({
    recipes: recipesReducer,
    favorite: favoriteReducer
});