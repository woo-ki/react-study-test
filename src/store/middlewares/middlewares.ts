import type {StateCreator, StoreMutatorIdentifier} from 'zustand'
import {devtools} from "zustand/middleware";
import {logger} from "./logger.ts";

type Middleware = <
    T,
    Mps extends [StoreMutatorIdentifier, unknown][] = [],
    Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
    f: StateCreator<T, Mps, Mcs>,
    option: { name: string; enabled: boolean; }
) => StateCreator<T, Mps, Mcs>

type MiddlewareImpl = <T>(
    f: StateCreator<T, [], []>,
    option: { name: string; enabled: boolean; }
) => StateCreator<T, [], []>

const middlewaresImpl: MiddlewareImpl = (f, option) => (set, get, store) => {
    return (devtools(
        logger(
                f,
                option),
            option))(set, get, store);
}

export const middlewares = middlewaresImpl as Middleware
