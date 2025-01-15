import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tableData: [],
  brandQuery: '',
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setTableData: (state, action) => {
      state.tableData = action.payload;
    },
    setBrandQuery: (state, action) => {
      state.brandQuery = action.payload;
    },
  },
});

export const { setTableData, setBrandQuery } = tableSlice.actions;
export default tableSlice.reducer;
