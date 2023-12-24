const initialState = {
    user: null,
    error: null
  };
  
  const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.payload,
          error: null
        };
      default:
        return state;
    }
  };
  
  export default UserReducer;