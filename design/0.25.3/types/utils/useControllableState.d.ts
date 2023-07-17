interface UseControllableStateProps<T> {
    state?: T;
    defaultState: T | (() => T);
    onChange?: (value: T) => void;
}
export declare const useControllableState: <T>({ state: valueFromProps, defaultState, onChange, }: UseControllableStateProps<T>) => readonly [T, (nextState: T | ((value: T) => T)) => void];
export {};
//# sourceMappingURL=useControllableState.d.ts.map