import { useContext, createContext } from 'react'

import { LocalesContextData, ThemeContextData } from 'src/contexts/types'

export const LocalesContext = createContext<LocalesContextData | null>(null)

export const ThemeContext = createContext<ThemeContextData | null>(null)

export const useLocales = (): LocalesContextData => {
  const data = useContext(LocalesContext)

  if (!data) {
    throw new Error('useLocales was used outside of its Provider')
  }

  return data
}

export const useThemeContext = (): ThemeContextData => {
  const data = useContext(ThemeContext)

  if (!data) {
    throw new Error('useThemeContext was used outside of its Provider')
  }

  return data
}
