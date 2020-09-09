export const addRecipes = recipes => ({
    type: 'SET_RECIPES',
    recipes
});

export const addFavorite = id => ({
    type: 'ADD_FAVORITE',
    id
});
  
export const deleteFavorite = id => ({
    type: 'DELETE_FAVORITE',
    id
});