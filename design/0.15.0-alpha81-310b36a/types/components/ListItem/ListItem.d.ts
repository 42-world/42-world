import { ReactNode, MouseEventHandler } from 'react';
interface Props {
    title: string;
    thumbnailSrc?: string;
    secondaryTextFirst?: string;
    secondaryTextSecond?: string;
    hasBorder?: boolean;
    rightAddon?: ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement>;
}
export declare function ListItem({ title, thumbnailSrc, secondaryTextFirst, secondaryTextSecond, hasBorder, rightAddon, onClick, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ListItem.d.ts.map