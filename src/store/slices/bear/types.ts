type BearStates = {
    bears: number;
}
type BearActions = {
    increase: (by: number) => void;
    description: () => void;
    test: () => Promise<void>;
}

export type BearStoreType = BearStates & BearActions;
