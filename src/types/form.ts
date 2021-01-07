import { I18nMessages } from './'

// MAIN TYPES
export interface FormSchema {
  [inputName: string]: FormInputTypes
}

// Input base type
export interface FormInput {
  // Input native attrs
  type?: string
  value?: any
  label?: string
  disabled?: boolean
  readonly?: boolean
  // Input enhancement attrs
  help?: string
  detail?: string
  errors?: string[]
  validations?: FormValidatorOption
  events?: FormCustomEvents,
  messages?: I18nMessages
}

// INPUT TYPES
export interface FormInputText extends FormInput {
  placeholder?: string
}
export interface FormInputSelect extends FormInput {
  placeholder?: string
  options: FormInputOption[]
}
export interface FormInputMoney extends FormInput {
  placeholder?: string
  currency?: string
}
export interface FormInputDate extends FormInput {
  placeholder?: string
  static: boolean
  time: boolean
  locale: 'pt' | 'en'
  mode: 'time' | 'single' | 'multiple' | 'range'
  dateFormat: 'Y/m/d H:i' | 'Y/m/d'
  defaultDate: string | null
}
export interface FormInputCheckbox extends FormInput {
  title?: string
}
export type FormInputTypes =
  | FormInputText
  | FormInputSelect
  | FormInputDate
  | FormInputMoney
  | FormInputCheckbox

// SUPPORT TYPES
export interface FormInputOption {
  value: string | number
  label: string
}

export interface FormCustomEvents {
  onInput?: OnInputCustomEvent
}
export interface OnInputCustomEvent {
  (args: { ev: InputEvent; schema: FormSchema }): void
}

export interface OnInputEvent extends InputEvent {
  target: HTMLInputElement
}
export interface OnInputPayload {
  name: string
  value: any
}

export interface FormOnUpdateHandler {
  (ev: OnInputEvent, payload: OnInputPayload): void
}

export interface FormValidator {
  message: string
  handler(value: any): any
}
export interface FormValidatorOption {
  [name: string]: FormValidator
}
