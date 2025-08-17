import { createContext, useState, useContext, ReactNode } from 'react';
import { AppColor } from '../model/AppColor';
import { DarkColors, LightColors } from '../global/GlobalStyle';

interface ThemeContextType {
    themeColors: AppColor;
    theme: string;
    toggleTheme: (value:string) => void;
}

const initialThemeContext:ThemeContextType = {
    themeColors: LightColors,
    theme: 'light',
    toggleTheme: (value: string) => {}
}

export const ThemeContext = createContext<ThemeContextType>(initialThemeContext);

export const ThemeProvider = ({ children }:{children: ReactNode}) => {
  const [themeColors, setThemeColor] = useState<AppColor>(LightColors);
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = (value: string) => {
    console.log("Toggling theme to:", value);
    setThemeColor(value === 'dark' ? DarkColors : LightColors);
    setTheme(value);
  };

  const value = {
    themeColors,
    theme,
    toggleTheme
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);