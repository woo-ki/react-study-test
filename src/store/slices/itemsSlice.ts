import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {AppDispatch} from "../index.ts";

export type Item = {
    id: number;
}
export type ItemsState = {
    loading: boolean;
    error: boolean;
    items: Item[];
}

const initialState: ItemsState = {
    loading: false,
    error: false,
    items: []
}

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setError: (state) => {
            state.loading = false;
            state.error = true;
        },
        setItems: (state, action) => {
            state.loading = false;
            state.error = false;
            state.items.push(action.payload);
            console.log("and 맘대로거")
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItemsThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchItemsThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.items.push(action.payload);
            console.log("end async thunk")
        });
        builder.addCase(fetchItemsThunk.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    }
});

export const {setLoading, setError, setItems} = itemsSlice.actions;
export default itemsSlice.reducer;


const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export const fetchItems = (idx: number) => async (dispatch: AppDispatch) => {
    dispatch(setLoading());
    await api
        .get(`todos/${idx}`)
        .then((response) => {
            dispatch(setItems(response.data))
        })
        .catch((error) => {
            dispatch(setError(error));
        });
}

export const fetchItemsThunk = createAsyncThunk(
    "itemsSlice/fetchItems",
    async (idx: number) => {
        const response = await api.get(`todos/${idx}`);
        return response.data;
    }
);
