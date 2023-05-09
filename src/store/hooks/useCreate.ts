import type {StateCreator, StoreApi, UseBoundStore} from 'zustand'
import {create} from "zustand";
import {middlewares} from "../middlewares/middlewares.ts";

export type CreateStore<T> = StateCreator<T>;
export const useCreate = <T>(slice: StateCreator<T>, option: {name: string; enabled: boolean;}): UseBoundStore<StoreApi<T>> => (create<T>()(
    middlewares(slice, option)
));
