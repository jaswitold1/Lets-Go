const hamburgerState = {
  hamburgerWidth: "translateX(-100%)",
};
const authState = {
  lowerMenuDisplay: "none",
  mapsHeight: "53vh",
};
const dataState = {
  loading: false,
  data: [],
  error: "",
};
const photosState = {
  loading: false,
  photos: [],
  error: "",
};

export const dataStateReducer = (state = dataState, action) => {
  switch (action.type) {
    case "DATA_REQUEST":
      return {
        ...state,
        loading: "true",
      };

    case "DATA_SUCCES":
      return {
        ...state,
        loading: "false",
        data: action.payload,
      };

    default:
      return state;
  }
};
export const photosStateReducer = (state = photosState, action) => {
  switch (action.type) {
    case "PHOTOS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "PHOTOS_SUCCES":
      return {
        ...state,
        loading: "false",
        photos: action.payload,
      };

    default:
      return state;
  }
};

export const authStateReducer = (state = authState, action) => {
  switch (action.type) {
    case "LOGGED":
      return {
        ...state,
        lowerMenuDisplay: "flex",
        mapsHeight: "47vh",
      };

    case "NOT_LOGGED":
      return {
        ...state,
        lowerMenuDisplay: "none",
        mapsHeight: "53vh",
      };

    default:
      return state;
  }
};
export const hamburgerWidthReducer = (state = hamburgerState, action) => {
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
