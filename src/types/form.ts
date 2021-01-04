import { WgMessages } from './i18n'

// MAIN TYPES
export interface WgForm {
  locale: WgMessages
  schema: WgFormSchema
}

export interface WgFormSchema {
  [inputName: string]: WgInput
}

export interface WgField extends WgInput {
  id: string
  input: WgInputTypes
  messages: WgMessages
}


// INPUT TYPES
export interface WgInput {
  type?: string
  label?: string
  value?: any
  errors?: string[]
  detail?: string
  help?: string
  disabled?: boolean
  readonly?: boolean
  validations?: WgValidators
  events?: WgInputEvents,
  messages?: WgMessages
}
export interface WgInputText extends WgInput {
  placeholder?: string
}
export interface WgInputSelect extends WgInput {
  placeholder?: string
  options: WgInputOption[]
}
export interface WgInputMoney extends WgInput {
  placeholder?: string
  currency?: string
}
export interface WgInputDate extends WgInput {
  placeholder?: string
  static: boolean
  locale: 'pt' | 'en'
  time: boolean
  mode: 'time' | 'single' | 'multiple' | 'range'
  dateWgat: 'Y/m/d H:i' | 'Y/m/d'
  defaultDate: string | null
}

// SUPPORT TYPES
export interface WgInputOption {
  value: string | number
  label: string
}

export interface WgInputEvents {
  onInput?: WgOnInputEvent
}
export interface WgOnInputEvent {
  (args: { ev: InputEvent; schema: WgFormSchema }): void
}

export interface WgValidator {
  message: string
  handler: WgValidatorHandler
}
export interface WgValidatorHandler {
  (value: any): any
}
export interface WgValidators {
  [validationName: string]: WgValidator
}

export type WgInputTypes =
  | WgInputText
  | WgInputSelect
  | WgInputDate
  | WgInputMoney



