import 'styled-components';
import { defaultTheme as theme } from './theme';

declare module 'styled-components' {
    type ThemeType = typeof theme;
    export interface DefaultTheme extends ThemeType { }
}