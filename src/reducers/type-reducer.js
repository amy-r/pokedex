const typesReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TYPES':
      return [...pokeTypes]  
    default:
      return state;
    }
};

export default typesReducer
