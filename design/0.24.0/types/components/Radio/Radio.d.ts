import { ChangeEventHandler } from 'react';
export interface Props {
    label: string;
    selected?: boolean;
    disabled?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
export declare function Radio({ label, selected, disabled, onChange }: Props): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Radio.d.ts.map