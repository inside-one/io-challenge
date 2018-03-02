const initialState = {
    all : null,
    current: null,
    status: 'INIT'
  }
  
  export default (state = initialState, action = {}) => {
    switch (action.type) {
      
      case "SET_TICKETS":
      return {
          ...state,
          all : action.payload,
          status : action.type
      };
  
      default:
        return state;
    }
  }
  