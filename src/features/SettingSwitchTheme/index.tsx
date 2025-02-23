import React from 'react'
import { Switch } from 'src/components/shadcn/Switch'
import { useSettingSwitchTheme } from 'src/features/SettingSwitchTheme/useSettingSwitchTheme'

const SettingToggleTheme = (): React.JSX.Element => {
  const { isChecked, onCheckedChange, themeLabel } = useSettingSwitchTheme()

  return (
    <div className="flex flex-col mt-6 max-w-[250px]">
      <div className="flex items-center space-x-7">
        <span className="text-lg font-medium w-[72%]">{themeLabel}</span>
        <Switch checked={isChecked} onCheckedChange={onCheckedChange} />
      </div>
    </div>
  )
}

export default SettingToggleTheme
