type FishStates = {
    fishes: number;
}
type FishActions = {
    increase: (by: number) => void;
    description: () => void;
}
export type FishStoreType = FishStates & FishActions;
