import { createSlice } from "@reduxjs/toolkit";

const initialState = { countries: [] };
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData(state, actions) {
      state.countries = actions.payload;
    },
  },
});

export const fetchData = (url) => {
  return (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch(dataSlice.actions.getData(data));
    };
    // sendRequest();
  };
};

export const dataSliceActions = dataSlice.actions;
export default dataSlice;
