import { Language, Locale, ThemeVariants } from 'src/types'

export type LocalesContextData = {
  locale: Language
  translations: Locale
  handleChangeLocale: (locale: Language) => void
}

export type ThemeContextData = {
  theme: ThemeVariants
  handleSetTheme: (theme: ThemeVariants) => void
}
