import { createContext, useCallback, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import Theme from "../styles/theme"

interface ThemeContextData {
  toggleTheme: () => void,
  theme: ThemeData,
}

interface ThemeData {
  NAME: string,
    COLORS: {
        WHITE: string,
        BACK_001: string,
        BACK_002: string,
        BACK_003: string,
        COLOR_ACTION: string,
    }
}

const themeContext = createContext<ThemeContextData>({} as ThemeContextData) 

export const useTheme = () => useContext(themeContext)

export function CustomThemeProvider({ children }: any) {
    const [theme, setTheme] = useState<ThemeData>(Theme.blueDarkTheme)

    const toggleTheme = useCallback(() => {
        switch(theme.NAME) {
            case "blueDarkTheme": setTheme(Theme.orangeTheme)
                break
            case "orangeTheme": setTheme(Theme.blueLightTheme)
                break
            case "blueLightTheme": setTheme(Theme.blueDarkTheme)
                break
            default: setTheme(Theme.blueDarkTheme)
        } 
    }, [theme])
    
    return (
        <themeContext.Provider value={{ toggleTheme, theme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </themeContext.Provider>
    )
}


export default ThemeProvider