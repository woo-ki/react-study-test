import {type SliceCreator, getCreate} from "../hooks/getCreate.ts";

type BearState = {
    bears: number;
}
type BearActions = {
    increase: (by: number) => void;
    description: () => void;
    test: () => Promise<void>;
}
export type BearStoreType = BearState & BearActions;

const bearSlice: SliceCreator<BearStoreType> = (set, get) => ({
    bears: 0,
    increase: (by) => {
        set((state) => ({bears: state.bears + by}))
        get().description();
    },
    description: () => {
        console.log(`I am a ${get().bears}bear`);
    },
    test: async() => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set((state) => ({bears: state.bears + 1}))
    }
});

export const useBearStore = getCreate(bearSlice, "bear-store");

