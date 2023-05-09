import {BearStoreType, useBearStore} from "./slices/bearSlice.ts";
import {FishStoreType, useFishStore} from "./slices/fishSlice.ts";

type AppStoreType = {
    bear: BearStoreType;
    fish: FishStoreType;
}

export const useAppStore = () => {
    const stores: AppStoreType = {
        bear: useBearStore(),
        fish: useFishStore()
    }
    return stores;
};
