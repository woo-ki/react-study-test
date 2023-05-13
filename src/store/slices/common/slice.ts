import type {SliceCreator} from "../../hooks/getCreate.ts";
import type {CommonStoreType} from "./types.ts";

export const slice: SliceCreator<CommonStoreType> = (set) => ({
    loading: false,
    setLoading: (payload) => {
        set({loading: payload});
    }
});
