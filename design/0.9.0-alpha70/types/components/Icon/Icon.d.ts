import { FunctionComponent, SVGProps } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
    svg: FunctionComponent<SVGProps<SVGSVGElement>>;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}
export declare function Icon({ svg, size, ...rest }: Props): import("react").FunctionComponentElement<SVGProps<SVGSVGElement>>;
export {};
//# sourceMappingURL=Icon.d.ts.map