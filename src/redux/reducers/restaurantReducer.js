import ActionTypes from "./actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REST_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.REST_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ActionTypes.REST_SUCCES:
      return {
        ...state,
        isLoading: false,
        error: null,
        restaurants: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantReducer;
