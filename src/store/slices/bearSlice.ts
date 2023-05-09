import {type CreateStore, useCreate} from "../hooks/useCreate.ts";

type BearState = {
    bears: number;
}
type BearActions = {
    increase: (by: number) => void;
    description: () => void;
}
export type BearStoreType = BearState & BearActions;

const bearSlice: CreateStore<BearStoreType> = (set, get) => ({
    bears: 0,
    increase: (by) => {
        set((state) => ({bears: state.bears + by}))
        get().description();
    },
    description: () => {
        console.log(`I am a ${get().bears}bear`);
    }
});
const option = {
    name: "bear-store",
    enabled: process.env.NODE_ENV !== "production"
}

export const useBearStore = useCreate(bearSlice, option);
