import {type SliceCreator, getCreate} from "../hooks/getCreate.ts";

type FishState = {
    fishes: number;
}
type FishActions = {
    increase: (by: number) => void;
    description: () => void;
}
export type FishStoreType = FishState & FishActions;

const fishSlice: SliceCreator<FishStoreType> = (set, get) => ({
    fishes: 0,
    increase: (by) => {
        set((state) => ({fishes: state.fishes + by}))
        get().description();
    },
    description: () => {
        console.log(`I am a ${get().fishes}fish`);
    }
});

export const useFishStore = getCreate(fishSlice, "fish-store");
