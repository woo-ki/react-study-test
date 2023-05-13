import {type FishStoreType, useFishStore} from "./slices/fish";
import {type BearStoreType, useBearStore} from "./slices/bear";
import {CommonStoreType, useCommonStore} from "./slices/common";

export type AppStoreType = {
    bear: BearStoreType;
    fish: FishStoreType;
    common: CommonStoreType;
}

export type StoreKey = keyof AppStoreType;

export function useAppStore(): AppStoreType;
export function useAppStore<K extends StoreKey>(storeKey: K): AppStoreType[K];
export function useAppStore<K extends StoreKey>(storeKey?: K): AppStoreType | AppStoreType[K] {
    const stores: AppStoreType = {
        bear: useBearStore(),
        fish: useFishStore(),
        common: useCommonStore()
    }
    if (storeKey) {
        return stores[storeKey];
    } else {
        return stores;
    }
}
