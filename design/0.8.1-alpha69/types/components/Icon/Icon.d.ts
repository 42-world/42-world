import { SVGProps } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
    svg: React.FC<React.SVGAttributes<SVGElement>>;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}
export declare function Icon({ svg: SvgComponent, size, className, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Icon.d.ts.map