const typesReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TYPES':
      return [...action.pokeTypes]  
    default:
      return state;
    }
};

export default typesReducer
