import { ReactElement, SVGProps } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
    svg: ReactElement;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}
export declare function Icon({ svg: SvgComponent, size, className, ...rest }: Props): ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export {};
//# sourceMappingURL=Icon.d.ts.map