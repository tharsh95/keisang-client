// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import countConditionReducer from './slices/count_condition';
import msrpConditionReducer from './slices/msrp_condition';
import tableReducer from './slices/fetch'

const store = configureStore({
  reducer: {
    countCondition: countConditionReducer,
    msrpCondition: msrpConditionReducer,
    table: tableReducer,

  },
});

export default store;
