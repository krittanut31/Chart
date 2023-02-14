import { createSlice } from "@reduxjs/toolkit";
export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    addChart: (state, { payload: { data } }) => {
      // let dataList = state.data;
      // if (data) {
      //   dataList.push(data);
      // }
      state.data = [...state.data, data];
      console.log(state.data);
    },
    removeChart: (state) => {
      state.data = [];
    },
  },
});
export const { addChart, removeChart } = dataSlice.actions;
export default dataSlice.reducer;
