import type {SliceCreator} from "../../hooks/getCreate.ts";
import type {FishStoreType} from "./types.ts";

export const slice: SliceCreator<FishStoreType> = (set, get) => ({
    fishes: 0,
    increase: (by) => {
        set((state) => ({fishes: state.fishes + by}))
    },
    description: () => {
        console.log(`I am a ${get().fishes}fish`);
    }
});
