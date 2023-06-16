import { ButtonHTMLAttributes, FC, SVGAttributes } from 'react';
type ButtonVariant = 'primary' | 'secondary' | 'text';
interface ButtonProps {
    variant?: ButtonVariant;
    text?: string;
    icon?: FC<SVGAttributes<SVGSVGElement>>;
}
type Props = ButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>;
export declare function Button({ variant, text, icon, className, ...restProps }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map