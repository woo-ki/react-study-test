import {type CreateStore, useCreate} from "../hooks/useCreate.ts";

type FishState = {
    fishes: number;
}
type FishActions = {
    increase: (by: number) => void;
    description: () => void;
}
export type FishStoreType = FishState & FishActions;

const fishSlice: CreateStore<FishStoreType> = (set, get) => ({
    fishes: 0,
    increase: (by) => {
        set((state) => ({fishes: state.fishes + by}))
        get().description();
    },
    description: () => {
        console.log(`I am a ${get().fishes}fish`);
    }
});
const option = {
    name: "fish-store",
    enabled: process.env.NODE_ENV !== "production"
}

export const useFishStore = useCreate(fishSlice, option);
