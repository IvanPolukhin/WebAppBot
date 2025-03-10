import { useForm } from 'react-hook-form'
import { FormDataRegistration } from 'src/pages/Registration/types'
import { getFormFields } from 'src/pages/Registration/helpers'
import { useLocales } from 'src/contexts'
import { DEFAULT_VALUES } from 'src/pages/Registration/constants'

export const useRegistration = () => {
  const { translations } = useLocales()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormDataRegistration>({
    defaultValues: { ...DEFAULT_VALUES },
  })

  const onSubmit = (data: FormDataRegistration) => {
    console.log('Registration Data:', data)
  }

  const listOfFields = getFormFields(translations)

  const locale = translations.registration

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    control,
    listOfFields,
    locale,
  }
}
