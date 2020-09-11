export const addRecipes = recipes => ({
    type: 'SET_RECIPES',
    recipes
});

export const addFavorite = id => ({
    type: 'ADD_FAVORITE',
    id
});
