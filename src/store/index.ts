import {BearStoreType, useBearStore} from "./slices/bearSlice.ts";
import {FishStoreType, useFishStore} from "./slices/fishSlice.ts";

type AppStoreType = {
    bear: BearStoreType;
    fish: FishStoreType;
}

type StoreKey = keyof AppStoreType;

export function useAppStore(): AppStoreType;
export function useAppStore<K extends StoreKey>(storeKey: K): AppStoreType[K];
export function useAppStore<K extends StoreKey>(storeKey?: K): AppStoreType | AppStoreType[K] {
    const stores: AppStoreType = {
        bear: useBearStore(),
        fish: useFishStore()
    }
    if (storeKey) {
        return stores[storeKey];
    } else {
        return stores;
    }
}
