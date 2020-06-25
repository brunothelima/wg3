import { LocaleMessages } from '.'

export interface FormSchema {
  [inputName: string]: FormInputTypes
}

export interface FormInput {
  type: string
  label?: string
  value?: string
  errors?: string[]
  detail?: string
  disabled?: boolean
  readonly?: boolean
  validations?: FormValidatiorsType
  events?: FormInputEvents
}

export interface FormInputText extends FormInput {
  placeholder?: string
}

export interface FormInputTextarea extends FormInput {
  placeholder?: string
}

export interface FormInputSelect extends FormInput {
  placeholder?: string
  options: FormInputOption[]
}

export interface FormInputRadio extends FormInput {
  placeholder?: string
  options: FormInputOption[]
}
export interface FormInputOption {
  value: string | number
  label: string
}

export interface FormInputCheckbox extends FormInput {
  title: string
}

export interface FormInputRange extends FormInput {
  min: number
  max: number
  step: number
  placeholder?: string
}

export interface FormInputEvents {
  onInput?: FormOnInputEvent
}

export interface FormOnInputEvent {
  (args: { ev: any, schema: FormSchema }): void
}

export type FormInputTypes =
  | FormInputText
  | FormInputTextarea
  | FormInputSelect
  | FormInputRadio
  | FormInputCheckbox
  | FormInputRange

export interface FormValidator {
  message: string
  handler: FormValidatorHandler
}

export interface FormValidatorHandler {
  (value: any): any
}

export interface FormValidatiorsType {
  [validationName: string]: FormValidator
}

export interface FormProps {
  locale: LocaleMessages
  schema: FormSchema
}
