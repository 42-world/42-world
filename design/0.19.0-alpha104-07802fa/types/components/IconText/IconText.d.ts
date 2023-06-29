import { FunctionComponent, SVGProps } from 'react';
type Size = 'medium' | 'small' | 'xsmall';
interface Props {
    svg: FunctionComponent<SVGProps<SVGSVGElement>>;
    text: string;
    size?: Size;
}
export declare function IconText({ svg, size, text }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=IconText.d.ts.map