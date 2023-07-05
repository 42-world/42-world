import { ReactNode, ChangeEventHandler } from 'react';
interface Props {
    children: ReactNode;
    selectedValue: string[];
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
type CheckboxContextType = Omit<Props, 'children'>;
export declare const CheckboxContext: import("react").Context<CheckboxContextType | null>;
export declare function CheckboxGroup({ children, ...restProps }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CheckboxGroup.d.ts.map