import type {SliceCreator} from "../../hooks/getCreate.ts";
import type {BearStoreType} from "./types.ts";

export const slice: SliceCreator<BearStoreType> = (set, get) => ({
    bears: 0,
    increase: (by) => {
        set((state) => ({bears: state.bears + by}))
    },
    description: () => {
        console.log(`I am a ${get().bears}bear`);
    },
    test: async() => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set((state) => ({bears: state.bears + 1}))
    }
});
