import { createContext, useCallback, useContext, useState } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";

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

    console.log(Theme)
    console.log(Theme.blueDarkTheme)
    console.log(Theme.blueLightTheme)
    console.log(Theme.orangeTheme)
    console.log(theme)

    const toggleTheme = useCallback(() => {
        setTheme(Theme.orangeTheme)
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