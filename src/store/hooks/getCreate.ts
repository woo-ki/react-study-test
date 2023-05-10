import type {StateCreator, StoreApi, UseBoundStore} from 'zustand'
import {create} from "zustand";
import {middlewares} from "../middlewares/middlewares.ts";

export type SliceCreator<T> = StateCreator<T>;
type OptionType = {
    name: string;
    enabled: boolean;
}
export const getCreate = <T>(slice: StateCreator<T>, name: string): UseBoundStore<StoreApi<T>> => {
    const option: OptionType = {
        name: name,
        enabled: process.env.NODE_ENV !== "production"
    }
    return  (create<T>()(middlewares(slice, option)));
};
