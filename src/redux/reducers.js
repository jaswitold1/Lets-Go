const hamburgerState = {
  hamburgerWidth: "translateX(-100%)",
  hamburgerLightsOut: "brightness(100%)",
};
const authState = {};
const dataState = {
  loading: false,
  data: [],
  error: "",
  placeArr: [],
};
const photosState = {
  loading: false,
  photos: [],
  error: "",
};
const hoverState = {
  hover: "",
  hoverLat: "",
  hoverLng: "",
};
const toggleState = {
  toggleData: false,
};
const pinLocationState = {};
export const pinLocationReducer = (state = pinLocationState, action) => {
  switch (action.type) {
    case "PINLOCATION":
      return {
        pinLocation: action.payload,
      };
    default:
      return state;
  }
};

export const toggleReducer = (state = toggleState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        toggleData: !state.toggleData,
      };

    default:
      return state;
  }
};
export const hoverReducer = (state = hoverState, action) => {
  switch (action.type) {
    case "HOVER":
      return {
        hover: action.payload,
      };
    case "HOVERLAT":
      return {
        ...state,
        hoverLat: action.payload,
      };
    case "HOVERLNG":
      return {
        ...state,
        hoverLng: action.payload,
      };
    case "HOVERPLACENAME":
      return {
        ...state,
        hoverPlaceName: action.payload,
      };

    default:
      return state;
  }
};
export const dataStateReducer = (state = dataState, action) => {
  switch (action.type) {
    case "DATA_REQUEST":
      return {
        ...state,
        loading: "true",
      };

    case "DATA_SUCCESS":
      return {
        ...state,
        loading: "false",
        data: action.payload,
      };

    case "DATA_ERROR":
      return {
        ...state,
        loading: "false",
        error: action.payload,
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

    case "PHOTOS_SUCCESS":
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
        upperNaviHeight: "70%",
      };

    case "NOT_LOGGED":
      return {
        ...state,
        lowerMenuDisplay: "none",
        upperNaviHeight: "100%",
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
        hamburgerLightsOut: "brightness(50%)",

        isActive: "is-active",
      };

    case "INACTIVE":
      return {
        ...state,
        hamburgerWidth: "translateX(-100%)",
        hamburgerLightsOut: "brightness(100%)",
        isActive: "",
      };

    default:
      return state;
  }
};
