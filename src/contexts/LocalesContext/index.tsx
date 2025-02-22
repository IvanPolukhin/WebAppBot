import { JSX, useMemo, useState } from 'react'

import { Language, Locale, LocalStorageKeys } from 'src/types'
import { LocalesContext } from 'src/contexts'
import { TRANSLATIONS } from 'src/constants'

import { LocalesContextData } from 'src/contexts/types'

const LocalesProvider = ({ ...props }): JSX.Element => {
  const [locale, setLocale] = useState<Language>(
    (localStorage.getItem(LocalStorageKeys.LOCALE) as Language) || Language.EN,
  )
  const [translations, setTranslations] = useState<Locale>(TRANSLATIONS[locale])

  const handleChangeLocale = (locale: Language): void => {
    setLocale(locale)
    setTranslations(TRANSLATIONS[locale])
    localStorage.setItem(LocalStorageKeys.LOCALE, locale)
  }

  const localesContextData: LocalesContextData = useMemo(
    () => ({
      locale,
      translations,
      handleChangeLocale,
    }),
    [locale, translations],
  )

  return <LocalesContext.Provider value={localesContextData} {...props} />
}

export default LocalesProvider
