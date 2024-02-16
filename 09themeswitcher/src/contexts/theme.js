import { createContext, useContext } from "react";


//jb context pehli baar call ho toh usmei already yei obj feed ho..
export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme: () => {},//function
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}