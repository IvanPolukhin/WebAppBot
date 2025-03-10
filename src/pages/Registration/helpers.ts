import { Locale } from 'src/types'
import { Field, FieldType } from 'src/pages/Registration/types'

export const getFormFields = (translations: Locale): Field[] => {
  const { registration: locale } = translations

  return [
    {
      id: 'name',
      label: locale.name,
      placeholder: locale.namePlaceholder,
      type: FieldType.INPUT,
      validation: { required: locale.required },
    },
    {
      id: 'username',
      label: locale.username,
      placeholder: locale.usernamePlaceholder,
      type: FieldType.INPUT,
      validation: { required: locale.required },
    },
    {
      id: 'email',
      label: locale.email,
      placeholder: locale.emailPlaceholder,
      type: FieldType.INPUT,
      validation: {
        required: locale.required,
        pattern: { value: /\S+@\S+\.\S+/, message: locale.invalidEmail },
      },
    },
    {
      id: 'password',
      label: locale.password,
      placeholder: locale.passwordPlaceholder,
      type: FieldType.INPUT,
      validation: {
        required: locale.required,
        pattern: { value: /.{6,}/, message: locale.passwordMismatch },
      },
    },
    {
      id: 'confirmPassword',
      label: locale.confirmPassword,
      placeholder: locale.confirmPasswordPlaceholder,
      type: FieldType.INPUT,
      validation: { required: locale.required },
    },
  ]
}
