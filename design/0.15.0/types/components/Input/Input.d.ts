import type { InputHTMLAttributes, ReactNode } from 'react';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    value?: string;
    defaultValue?: string;
    subLabel?: string;
    variant: 'outline' | 'filled';
    hasError: boolean;
    rightAddon: ReactNode;
    onValueChange: (value: string) => void;
}
export declare const Input: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Input.d.ts.map