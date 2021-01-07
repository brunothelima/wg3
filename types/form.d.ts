
declare module '@ckeditor/*' {
  const ClassicEditorBuild: any;
  export = ClassicEditorBuild;
}

// MAIN TYPES
declare interface FormSchema {
  [inputName: string]: FormInputTypes
}

// Input base type
declare interface FormInput {
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
declare interface FormInputText extends FormInput {
  placeholder?: string
}
declare interface FormInputTextarea extends FormInput {
  placeholder?: string
  maxlength?: number
}
declare interface FormInputSelect extends FormInput {
  placeholder?: string
  options: FormInputOption[]
}
declare interface FormInputMoney extends FormInput {
  placeholder?: string
  currency?: string
}
declare interface FormInputDate extends FormInput {
  placeholder?: string
  static: boolean
  time: boolean
  locale: 'pt' | 'en'
  mode: 'time' | 'single' | 'multiple' | 'range'
  dateFormat: 'Y/m/d H:i' | 'Y/m/d'
  defaultDate: string | null
}
declare interface FormInputCheckbox extends FormInput {
  title?: string
}
declare type FormInputTypes =
  | FormInputText
  | FormInputSelect
  | FormInputDate
  | FormInputMoney
  | FormInputCheckbox
  | FormInputTextarea

// // SUPPORT TYPES
declare interface FormInputOption {
  value: string | number
  label: string
}

declare interface FormCustomEvents {
  onInput?: OnInputCustomEvent
}
declare interface OnInputCustomEvent {
  (args: { ev: InputEvent; schema: FormSchema }): void
}

declare interface OnInputEvent extends InputEvent {
  target: HTMLInputElement
}

declare interface FormOnUpdateHandler {
  (args: [ev: OnInputEvent, name: string, end: number]): void
}

declare interface FormValidator {
  message: string
  handler(value: any): any
}
declare interface FormValidatorOption {
  [name: string]: FormValidator
}
