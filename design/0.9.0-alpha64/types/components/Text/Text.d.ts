export type TextSize = 'heading1' | 'heading2' | 'heading3' | 'body1' | 'body2' | 'small';
type TextWeight = 'regular' | 'medium' | 'semibold';
type TextAlign = 'left' | 'right' | 'center';
type Color = 'primary' | 'secondary' | 'tertiary' | 'white' | 'black' | 'red_100' | 'red_200' | 'red_300' | 'orange_100' | 'orange_200' | 'orange_300' | 'yellow_100' | 'yellow_200' | 'yellow_300' | 'lime_100' | 'lime_200' | 'lime_300' | 'green_100' | 'green_200' | 'green_300' | 'sky_100' | 'sky_200' | 'sky_300' | 'blue_100' | 'blue_200' | 'blue_300' | 'indigo_100' | 'indigo_200' | 'indigo_300';
type Props = {
    className?: string;
    text: string;
    size?: TextSize;
    weight?: TextWeight;
    align?: TextAlign;
    color?: Color;
};
export declare const textSizeConfig: Record<TextSize, string>;
export declare const textWeightConfig: Record<TextWeight, string>;
export declare const textAlignConfig: Record<TextAlign, string>;
export declare const textColorConfig: Record<Color, string>;
export declare function Text({ className, text, size, weight, align, color, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Text.d.ts.map