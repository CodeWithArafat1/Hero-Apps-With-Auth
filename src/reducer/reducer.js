export const DISPLAY_DATA = "DISPLAY_DATA";
export const SHOW_CHART = "SHOW_CHART";
export const SET_LOADING = "SET_LOADING";
export const SEARCH_APP = "SEARCH_APP";
export const SET_LOCAL = "SET_LOCAL";
export const SORTED_APP = "SORTED_APP";
export const IS_EXISTING = "IS_EXISTING";
export const IS_SELECTED = "IS_SELECTED";
export const SET_USER = "SET_USER";
export const SET_LOAD_USER = "SET_LOAD_USER";

export const reducer = (state, action) => {
  const { type, payload } = action;
  if (type === SET_LOADING) {
    return { ...state, loading: payload };
  }
  if (type === DISPLAY_DATA) {
    return { ...state, data: payload, displayData: payload, loading: false };
  }

  if (type === SHOW_CHART) {
    return { ...state, showChart: payload };
  }

  if (type === SEARCH_APP) {
    return { ...state, displayData: payload };
  }

  if (type === SET_LOCAL) {
    return { ...state, savedLocal: payload };
  }
  if (type === SORTED_APP) {
    return { ...state, savedLocal: payload };
  }
  if (type === IS_EXISTING) {
    return { ...state, isExisting: payload };
  }
  if (type === IS_SELECTED) {
    return { ...state, isSelected: payload };
  }
  if (type === SET_USER) {
    return { ...state, user: payload };
  }
  if (type === SET_LOAD_USER) {
    return { ...state, loadUser: payload };
  }

  return state;
};
