import React, { createContext, useContext, useEffect, useState } from 'react'

type ThemeType = 'dark' | 'light'

export const useThemeMode = () => {
    return useContext(ThemeModeContext)
}

const ThemeModeContext = createContext<{
    theme: ThemeType,
    selectTheme: (val:ThemeType) => void
}>({
    theme: 'light',
    selectTheme: (val: ThemeType) => {}
})

export const ThemeModeProvider = ({children}: any) => {

    const [theme, setTheme] = useState<ThemeType>('light')

    useEffect(() => {
      const cachedThemeMode = localStorage.getItem("image-gallery-app-theme")
      if(cachedThemeMode === 'light' || cachedThemeMode === 'dark'){
        setTheme(cachedThemeMode)
      }
    }, [])
    

    const selectTheme = (_theme: ThemeType) => {
        setTheme(_theme)
        localStorage.setItem("image-gallery-app-theme", _theme)
    }

    return (
        <ThemeModeContext.Provider value={{theme, selectTheme}}>
            {children}
        </ThemeModeContext.Provider>
    )
}