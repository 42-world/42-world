import type { InputHTMLAttributes, ReactNode } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    value?: string;
    defaultValue?: string;
    subLabel?: string;
    variant?: 'outline' | 'filled';
    required?: boolean;
    hasError?: boolean;
    rightAddon?: ReactNode;
    onValueChange?: (value: string) => void;
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Input.d.ts.map