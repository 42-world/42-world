import { ChangeEvent } from 'react';
interface Props {
    children: string;
    checked?: boolean;
    disabled?: boolean;
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export declare function Checkbox({ children, checked, disabled, value, onChange }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Checkbox.d.ts.map