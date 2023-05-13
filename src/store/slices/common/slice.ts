import type {SliceCreator} from "../../hooks/getCreate.ts";
import type {CommonStoreType} from "./types.ts";

export const slice: SliceCreator<CommonStoreType> = (set, get) => ({
    loading: false,
    alert_resolve: null,
    alert_props: {title: "알림", content: "내용", showCancel: false, cancel: "취소", confirm: "확인"},
    alert_visibility: false,
    setLoading: (payload) => {
        set({loading: payload});
    },
    showAlert: async (payload) => {
        return new Promise(resolve => set(state => ({
            alert_visibility: true,
            alert_resolve: resolve,
            alert_props: Object.assign(state.alert_props, payload)
        })));
    },
    answerAlert: (payload) => {
        return () => {
            const resolve = get().alert_resolve;
            if (resolve !== null) {
                resolve(payload);
                get().resetAlert();
            }
        }
    },
    resetAlert: () => {
        set({
            alert_visibility: false,
            alert_resolve: null,
            alert_props: {title: "알림", content: "내용", showCancel: false, cancel: "취소", confirm: "확인"}
        });
    }
});
