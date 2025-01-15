// redux/slices/msrp_condition.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  condition: 'new',
};

const msrpConditionSlice = createSlice({
  name: 'msrp_condition',
  initialState,
  reducers: {
    setCondition(state, action) {
      state.condition = action.payload;
    },
  },
});

export const { setCondition } = msrpConditionSlice.actions;
export default msrpConditionSlice.reducer;
