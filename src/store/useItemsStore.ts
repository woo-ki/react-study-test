import {create} from "zustand";
import {Item} from "./slices/itemsSlice.ts";
import axios from "axios";

type ItemsStoreType = {
    loading: boolean;
    error: boolean;
    items: Item[];
    setLoading: () => void;
    setError: () => void;
    setItems: (items: Item) => void;
    fetchItems: (idx: number) => Promise<void>;
}

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export const useItemsStore = create<ItemsStoreType>((set, get) => ({
    loading: false,
    error: false,
    items: [],
    setLoading: () => set({loading: true}),
    setError: () => set({loading: false, error: true}),
    setItems: (items: Item) => set((state) => ({loading: false, error: false, items: [...state.items, items]})),
    fetchItems: async (idx: number) => {
        const state = get();
        state.setLoading();
        await api
            .get(`todos/${idx}`)
            .then((response) => {
                state.setItems(response.data);
                console.log("end async thunk")
            })
            .catch(() => {
                state.setError();
            });
    }
}));
