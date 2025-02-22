export const RoutePaths = {
  counter: '/',
  register: '/register',
  setting: '/setting',
}

import { TRANSLATIONS } from 'src/constants'

import { Language } from 'src/types/enums'

export type Locale = (typeof TRANSLATIONS)[Language.EN]
