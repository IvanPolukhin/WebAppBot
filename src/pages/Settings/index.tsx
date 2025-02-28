import { JSX } from 'react'
import AppSelectLanguage from 'src/features/SettingSelectLanguage'
import SettingToggleTheme from 'src/features/SettingSwitchTheme'
import Container from 'src/components/Container'

const Setting = (): JSX.Element => {
  return (
    <Container classes="mt-8">
      <AppSelectLanguage />
      <SettingToggleTheme />
    </Container>
  )
}

export default Setting
