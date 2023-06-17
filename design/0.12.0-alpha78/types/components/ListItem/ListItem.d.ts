import { PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
    title: string;
    thumbnailSrc?: string;
    secondaryTextFirst?: string;
    secondaryTextSecond?: string;
    hasBorder?: boolean;
}>;
export declare function ListItem({ children, title, thumbnailSrc, secondaryTextFirst, secondaryTextSecond, hasBorder, }: Props): import("react/jsx-runtime").JSX.Element;
export declare namespace ListItem {
    var MetadataItems: ({ children }: Pick<Props, "children">) => import("react/jsx-runtime").JSX.Element;
}
export {};
//# sourceMappingURL=ListItem.d.ts.map