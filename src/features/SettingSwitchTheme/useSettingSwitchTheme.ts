import { ThemeVariants } from 'src/types'
import { useThemeContext } from 'src/contexts'
import { useLocales } from 'src/contexts'

export const useSettingSwitchTheme = () => {
  const { theme, handleSetTheme } = useThemeContext()
  const { translations } = useLocales()

  const isChecked = theme === ThemeVariants.DARK

  const onCheckedChange = (checked: boolean): void => {
    const newTheme = checked ? ThemeVariants.DARK : ThemeVariants.LIGHT

    handleSetTheme(newTheme)
  }

  return {
    isChecked,
    onCheckedChange,
    // yarIxbebe lox
    themeLabel: translations.setting.darkMode,
  }
}
