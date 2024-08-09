import { createContext, useCallback, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import Theme from "../styles/theme"

interface ThemeContextData {
  toggleTheme: () => void,
  theme: ThemeData,
}

interface ThemeData {
    name: string,
    colors: {
        primaryBackground: string,
        secondaryBackground: string,
        thirdBackground: string,
        textColorPrincipal: string,
        textColorSeconday: string,
        actionColor: string,
        primaryColor: string,
        secondaryColor: string,
        thirdColor: string,
    }
}

const themeContext = createContext<ThemeContextData>({} as ThemeContextData) 

export const useTheme = () => useContext(themeContext)

export function CustomThemeProvider({ children }: any) {
    const [theme, setTheme] = useState<ThemeData>(Theme.blueDarkTheme)

    const toggleTheme = useCallback(() => {
        switch(theme.name) {
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
            <ThemeProvider theme={{ ...theme, colors: { ...theme.colors } }}>
                {children}
            </ThemeProvider>
        </themeContext.Provider>
    )
}


export default ThemeProvider