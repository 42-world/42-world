import { SVGProps } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
    svg: React.FC<React.SVGAttributes<SVGElement>>;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}
export declare function Icon({ svg, size, ...rest }: Props): import("react").FunctionComponentElement<import("react").SVGAttributes<SVGElement>>;
export {};
//# sourceMappingURL=Icon.d.ts.map