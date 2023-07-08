import { ButtonHTMLAttributes, ReactElement } from 'react';
type ButtonVariant = {
    variant: 'text';
    activated?: boolean;
} | {
    variant: 'primary';
} | {
    variant: 'secondary';
};
type ButtonProps = Partial<ButtonVariant> & {
    text?: string;
    icon?: ReactElement;
};
type Props = ButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>;
export declare function Button(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map