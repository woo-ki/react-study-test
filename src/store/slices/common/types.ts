type AlertProps = {
    title: string;
    content: string;
    showCancel: boolean;
    cancel: string;
    confirm: string;
};
type CommonStates = {
    loading: boolean;
    alert_props: AlertProps;
    alert_visibility: boolean;
    alert_resolve: null | ((value: boolean) => void);
}
type CommonActions = {
    setLoading: (payload: boolean) => void;
    showAlert: (payload: AlertProps) => Promise<boolean>;
    answerAlert: (payload: boolean) => () => void;
    resetAlert: () => void;
}

export type CommonStoreType = CommonStates & CommonActions;
