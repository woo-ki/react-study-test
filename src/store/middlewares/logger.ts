import type {StateCreator, StoreMutatorIdentifier} from 'zustand'

type Logger = <
    T,
    Mps extends [StoreMutatorIdentifier, unknown][] = [],
    Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
    f: StateCreator<T, Mps, Mcs>,
    option: { name: string; enabled: boolean; }
) => StateCreator<T, Mps, Mcs>

type LoggerImpl = <T>(
    f: StateCreator<T, [], []>,
    option: { name: string; enabled: boolean; }
) => StateCreator<T, [], []>

const loggerImpl: LoggerImpl = (f, option) => (set, get, store) => {
    const getCurrentTime = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    const loggedSet: typeof set = (...a) => {
        const {name, enabled} = option;
        const action_name = `${name} update`;
        const time = getCurrentTime();
        if(!enabled) {
            set(...a);
            return;
        }
        console.group(`%c${action_name} %c@ ${time}`, 'color: black; font-weight: bold', 'color: grey');
        console.log(`  %cprev state\n`, "color: grey; font-weight: bold", get())
        set(...a)
        console.log(`  %cnext state\n`, "color: green; font-weight: bold", get())
        console.groupEnd();
    }
    store.setState = loggedSet

    return f(loggedSet, get, store)
}

export const logger = loggerImpl as unknown as Logger
