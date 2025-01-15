// redux/slices/count_condition.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  condition: 'new',
};

const countConditionSlice = createSlice({
  name: 'count_condition',
  initialState,
  reducers: {
    setCondition(state, action) {
      state.condition = action.payload;
    },
  },
});

export const { setCondition } = countConditionSlice.actions;
export default countConditionSlice.reducer;
