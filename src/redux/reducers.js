const initialState = {
  hamburgerWidth: "0",
};
const hamburgerWidthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTIVE":
      return {
        ...state,
        hamburgerWidth: "70vw",
      };

    case "INACTIVE":
      return {
        ...state,
        hamburgerWidth: 0,
      };

    default:
      return state;
  }
};

export default hamburgerWidthReducer;
