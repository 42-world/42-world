import type { ReactNode } from 'react';
export declare function createContext<ContextValueType extends object | null>(rootComponentName: string, defaultContext?: ContextValueType): readonly [{
    (props: ContextValueType & {
        children?: ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, (consumerName: string) => ContextValueType];
//# sourceMappingURL=createContext.d.ts.map