import { ReactNode, ChangeEventHandler } from 'react';
interface Props {
    children: ReactNode;
    selectedLabel: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
type RadioContextType = Omit<Props, 'children'>;
export declare const RadioContext: import("react").Context<RadioContextType | null>;
export declare function RadioGroup({ children, ...restProps }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RadioGroup.d.ts.map