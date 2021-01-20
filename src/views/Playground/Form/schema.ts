import { createForm, useNotifications } from '@src/composables'
import { required } from '@src/utils/validators'

const schema = createForm({
  inputText: {
    type: 'text',
    label: 'text.label',
    placeholder: 'text.placeholder',
    validations: { required },
  },
  inputPassword: {
    type: 'password',
    label: 'password.label',
    placeholder: 'password.placeholder',
    validations: { required }
  },
  inputSelect: {
    type: 'select',
    label: 'select.label',
    placeholder: 'select.placeholder',
    options: [
      { value: 1, label: 'select.options.first' },
      { value: 2, label: 'select.options.second' },
      { value: 3, label: 'select.options.third' }
    ],
    validations: { required }
  },
  inputMoney: {
    type: 'money',
    label: 'money.label',
    placeholder: 'money.placeholder',
    currency: 'R$',
    validations: { required }
  },
  inputFile: {
    type: 'file',
    label: 'file.label',
    placeholder: 'file.placeholder',
    validations: { required }
  },
  inputDate: {
    type: 'date',
    label: 'date.label',
    placeholder: 'date.placeholder',
    mode: 'single',
    help: 'date.help',
    validations: { required }
  },
  inputTextarea: {
    type: 'textarea',
    label: 'textarea.label',
    placeholder: 'textarea.placeholder',
    maxlength: 50,
    validations: { required }
  },
  inputTextButton: {
    type: 'text-button',
    label: 'text.label',
    placeholder: 'text.placeholder',
    validations: { required },
    button: {
      text: 'Click',
      onClick([event, inputName, inputValue]) { 
        schema.inputTextButton.value = 'Click! =)'
      }
    }
  },
  inputTextMagic: {
    type: 'text-magic',
    label: 'text.label',
    placeholder: 'text.placeholder',
    validations: { required }
  },
  inputSelectMagic: {
    type: 'select-magic',
    label: 'select.label',
    placeholder: 'select.placeholder',
    options: [
      { value: 1, label: 'select.options.first' },
      { value: 2, label: 'select.options.second' },
      { value: 3, label: 'select.options.third' }
    ],
    validations: { required }
  },
  inputCheckbox: {
    type: 'checkbox',
    label: 'checkbox.label',
    title: 'checkbox.title',
    validations: { required }
  },
  inputToggle: {
    type: 'toggle',
    label: 'toggle.label',
    title: 'toggle.title',
    validations: { required }
  },
  inputRadio: {
    type: 'radio',
    label: 'radio.label',
    options: [
      { value: 1, label: 'radio.options.first' },
      { value: 2, label: 'radio.options.second' },
    ],
    validations: { required }
  },
})

export default schema
