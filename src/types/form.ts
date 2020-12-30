import { LocaleMessages } from '.'
import { Messages } from './i18n'

export interface FormSchema {
  [inputName: string]: FormInputTypes
}

export interface FormField extends FormInput {
  id: string
  input: FormInputTypes
  locale: Messages
}

export interface FormInput {
  type?: string
  label?: string
  value?: any
  errors?: string[]
  detail?: string
  help?: string
  disabled?: boolean
  readonly?: boolean
  validations?: FormValidatiorsType
  events?: FormInputEvents,
  messages?: Messages
}

export interface FormInputText extends FormInput {
  placeholder?: string
}
export interface FormInputMoney extends FormInput {
  placeholder?: string
  currency?: string
}

export interface FormInputDate extends FormInput {
  placeholder?: string
  static: boolean
  locale: 'pt' | 'en'
  time: boolean
  mode: 'time' | 'single' | 'multiple' | 'range'
  dateFormat: 'Y/m/d H:i' | 'Y/m/d'
  defaultDate: string | null
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
  (args: { ev: any; schema: FormSchema }): void
}

export type FormInputTypes =
  | FormInputText
  | FormInputTextarea
  | FormInputSelect
  | FormInputRadio
  | FormInputCheckbox
  | FormInputDate
  | FormInputRange
  | FormInputMoney

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
