export const favoriteReducer = ( state = [], action ) => {
    switch(action.type) {
        case 'ADD_FAVORITE':
          console.log('ref', state)
          return [...state, action.id];
          case 'REMOVE_FAVORITE':
            return state.filter((id) => id !== action.id);
          default:
          return state;
    }  
};