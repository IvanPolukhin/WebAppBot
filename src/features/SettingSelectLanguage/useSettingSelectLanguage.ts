import { useLocales } from 'src/contexts'

export const useSettingSelectLanguage = () => {
  const { locale, handleChangeLocale, translations } = useLocales()

  return {
    language: locale,
    handleChangeLocale,
    translations,
    languageLabel: translations.setting.language,
    selectPlaceholder: translations.setting.selectLanguage,
  }
}
