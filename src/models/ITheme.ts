export enum ThemeVariants {
  light = "light",
  dark = "dark",
}

export interface ThemeContextType {
  theme: ThemeVariants | null;
  toggleTheme: () => void;
}
