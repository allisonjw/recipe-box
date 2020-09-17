export const recipesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RECIPES':
            console.log('rec', action.recipes)
            return action.recipes
        default:
            return state   
    }
}