import { JSX } from 'react'
import AppSelectLanguage from 'src/features/SettingSelectLanguage'
import SettingToggleTheme from 'src/features/SettingSwitchTheme'

const Setting = (): JSX.Element => {
  return (
    <div className="mt-8">
      <AppSelectLanguage />
      <SettingToggleTheme />
    </div>
  )
}

export default Setting
