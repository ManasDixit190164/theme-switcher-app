export type ColorTheme = 'crimson' | 'field' | 'aura';
export type ColorMode = 'light' | 'dark';

export interface ThemeContextType {
  colorTheme: ColorTheme;
  colorMode: ColorMode;
  setColorTheme: (theme: ColorTheme) => void;
  setColorMode: (mode: ColorMode) => void;
  toggleColorMode: () => void;
  toggleColorTheme: ()=> void;
}