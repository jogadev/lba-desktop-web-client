import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'

import { PriceListReducer, PriceListReducerName } from "./reducers/priceList/reducer";

const rootReducer = combineReducers({
    [PriceListReducerName]: PriceListReducer
});

const store = configureStore({
    reducer: rootReducer
});


export default store;