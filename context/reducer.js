export const initialState = {
  rentalList: [],
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_RENTAL_LIST':
      return {
        ...state, 
        rentalList: [...action.payload]
      }

    default:
      return state;
  }
}

export default reducer;