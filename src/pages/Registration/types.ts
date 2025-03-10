export type Validation = {
  required?: string
  pattern?: {
    value: RegExp
    message: string
  }
}

export type FormDataRegistration = {
  name: string
  username: string
  email: string
  password: string
  confirmPassword: string
}

export type Field = {
  id: keyof FormDataRegistration
  label: string
  placeholder: string
  type: FieldType
  options?: { value: string; label: string }[]
  validation?: Validation
}

export enum FieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  SELECT = 'select',
}
