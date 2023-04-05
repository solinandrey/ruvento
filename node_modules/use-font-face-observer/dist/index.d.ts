/**
 * @typedef FontFace
 * @property {string} family The font-family: Roboto, Inter, Open Sans, etc
 * @property {string|number} weight The font-weight: normal, bold, 800, etc
 * @property {string} style The font-style: normal, italic, oblique
 * @property {string} stretch The font stretch: normal, condensed, expanded, etc
 */
export interface FontFace {
    family: string;
    weight?: `light` | `normal` | `bold` | `bolder` | `100` | `200` | `300` | `400` | `500` | `600` | `700` | `800` | `900`;
    style?: `normal` | `italic` | `oblique`;
    stretch?: `normal` | `ultra-condensed` | `extra-condensed` | `condensed` | `semi-condensed` | `semi-expanded` | `expanded` | `extra-expanded` | `ultra-expanded`;
}
export interface Options {
    testString?: string;
    timeout?: number;
}
export interface Config {
    showErrors: boolean;
}
declare function useFontFaceObserver(fontFaces?: FontFace[], { testString, timeout }?: Options, { showErrors }?: Config): boolean;
export default useFontFaceObserver;
