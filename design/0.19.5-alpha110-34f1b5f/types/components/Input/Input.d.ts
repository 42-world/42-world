import type { InputHTMLAttributes, ReactNode } from 'react';
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    size?: 'small' | 'medium';
    value?: string;
    defaultValue?: string;
    subLabel?: string;
    variant?: 'outlined' | 'filled';
    required?: boolean;
    hasError?: boolean;
    rightAddon?: ReactNode;
    onValueChange?: (value: string) => void;
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Input.d.ts.map