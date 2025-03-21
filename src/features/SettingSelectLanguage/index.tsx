import React from 'react'
import { Language } from 'src/types'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/shadcn/select'
import { useSettingSelectLanguage } from 'src/features/SettingSelectLanguage/useSettingSelectLanguage'

const AppSelectLanguage = (): React.JSX.Element => {
  const { language, handleChangeLocale, languageLabel, selectPlaceholder } =
    useSettingSelectLanguage()

  return (
    <div className="flex flex-col mt-6 max-w-[250px]">
      <div className="flex items-center space-x-7">
        <span className="text-lg font-medium w-[72%]">{languageLabel}:</span>
        <Select
          value={language}
          onValueChange={(value: Language) =>
            handleChangeLocale(value as Language)
          }
        >
          <SelectTrigger className="w-32">
            <SelectValue placeholder={selectPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={Language.EN}>English</SelectItem>
            <SelectItem value={Language.UA}>Українська</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default AppSelectLanguage
