
declare module '@ckeditor/*' {
  const ClassicEditorBuild: any;
  export = ClassicEditorBuild;
}

// MAIN TYPES
declare interface FormSchema {
  [inputName: string]: FormInputTypes
}

declare interface FormSchemaData {
  [inputName: string]: string
}

// Input base type
declare interface FormInput {
  // Input native attrs
  type: string
  value?: any
  label?: string
  disabled?: boolean
  readonly?: boolean
  // Input enhancement attrs
  help?: string
  detail?: string
  errors?: string[]
  validations?: FormValidatorOption
  messages?: I18nMessages
  onUpdate?(args: OnUpdateArgs): void 
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
declare interface FormInputTextButton extends FormInputText {
  button: FormInputTextButtonProps
}
declare interface FormInputTextButtonProps extends CustomButton {
  onClick?(args: OnUpdateArgs): void,
  text?: string
}

declare type FormInputTypes =
  | FormInputText
  | FormInputSelect
  | FormInputDate
  | FormInputMoney
  | FormInputCheckbox
  | FormInputTextarea
  | FormInputTextButton

// // SUPPORT TYPES
declare interface FormInputOption {
  value: string | number
  label: string
}

// declare interface FormCustomEvents {
  
// }
declare interface OnInputEvent extends InputEvent {
  target: HTMLInputElement
}

declare type OnUpdateEvents = OnInputEvent | MouseEvent

declare type OnUpdateArgs = [OnUpdateEvents, string, any]

declare interface FormValidator {
  message: string
  handler(value: any): any
}
declare interface FormValidatorOption {
  [validationName: string]: FormValidator
}
