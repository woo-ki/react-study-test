type CommonStates = {
    loading: boolean;
}
type CommonActions = {
    setLoading: (payload: boolean) => void;
}

export type CommonStoreType = CommonStates & CommonActions;
