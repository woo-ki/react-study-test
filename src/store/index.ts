import {configureStore} from "@reduxjs/toolkit";
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import itemsReducer from "./slices/itemsSlice.ts"

export const store = configureStore({
    reducer: {
        items: itemsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
