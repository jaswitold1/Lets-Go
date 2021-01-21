const initialState = {
  hamburgerWidth: "translateX(-100%)",
};
const hamburgerWidthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTIVE":
      return {
        ...state,
        hamburgerWidth: "translateX(0%)",
        isActive: "is-active",
      };

    case "INACTIVE":
      return {
        ...state,
        hamburgerWidth: "translateX(-100%)",
        isActive: "",
      };

    default:
      return state;
  }
};

export default hamburgerWidthReducer;
