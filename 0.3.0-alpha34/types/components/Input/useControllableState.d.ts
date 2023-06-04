interface UseControllableStateProps<T> {
    value?: T;
    defaultValue?: T | (() => T);
    onChange?: (value: T) => void;
}
export declare const useControllableState: <T>({ value: valueFromProps, defaultValue, onChange, }: UseControllableStateProps<T>) => readonly [T, (nextState: T | (() => T)) => void];
export {};
//# sourceMappingURL=useControllableState.d.ts.map