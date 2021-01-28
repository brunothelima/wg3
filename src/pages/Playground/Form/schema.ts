import { createForm, useNotifications } from '@src/composables'
import { required } from '@src/utils/validators'

const schema = createForm({
  inputText: {
    type: 'Text',
    label: 'inputText.label',
    placeholder: 'inputText.placeholder',
    validations: { required },
  },
  inputPassword: {
    type: 'Password',
    label: 'inputPassword.label',
    placeholder: 'inputPassword.placeholder',
    validations: { required }
  },
  inputSelect: {
    type: 'Select',
    label: 'inputSelect.label',
    placeholder: 'inputSelect.placeholder',
    options: [
      { value: 1, label: 'inputSelect.options.first' },
      { value: 2, label: 'inputSelect.options.second' },
      { value: 3, label: 'inputSelect.options.third' }
    ],
    validations: { required }
  },
  inputMoney: {
    type: 'Money',
    label: 'inputMoney.label',
    placeholder: 'inputMoney.placeholder',
    currency: 'R$',
    validations: { required }
  },
  inputFile: {
    type: 'File',
    label: 'inputFile.label',
    placeholder: 'inputFile.placeholder',
    validations: { required }
  },
  inputDate: {
    type: 'Date',
    label: 'inputDate.label',
    placeholder: 'inputDate.placeholder',
    mode: 'single',
    help: 'inputDate.help',
    validations: { required }
  },
  inputTextarea: {
    type: 'Textarea',
    label: 'inputTextarea.label',
    placeholder: 'inputTextarea.placeholder',
    maxlength: 50,
    validations: { required }
  },
  inputTextButton: {
    type: 'TextButton',
    label: 'inputTextButton.label',
    placeholder: 'inputTextButton.placeholder',
    validations: { required },
    button: {
      text: 'inputTextButton.text',
      onClick([event, inputName, inputValue]) { 
        schema.inputTextButton.value = 'Click! =)'
      }
    }
  },
  inputTextMagic: {
    type: 'TextMagic',
    label: 'inputTextMagic.label',
    placeholder: 'inputTextMagic.placeholder',
    validations: { required }
  },
  inputSelectMagic: {
    type: 'SelectMagic',
    label: 'inputSelectMagic.label',
    placeholder: 'inputSelectMagic.placeholder',
    options: [
      { value: 1, label: 'inputSelectMagic.options.first' },
      { value: 2, label: 'inputSelectMagic.options.second' },
      { value: 3, label: 'inputSelectMagic.options.third' }
    ],
    validations: { required }
  },
  inputCheckbox: {
    type: 'Checkbox',
    label: 'inputCheckbox.label',
    title: 'inputCheckbox.title',
    validations: { required }
  },
  inputToggle: {
    type: 'Toggle',
    label: 'inputToggle.label',
    title: 'inputToggle.title',
    validations: { required }
  },
  inputRadio: {
    type: 'Radio',
    label: 'inputRadio.label',
    options: [
      { value: 1, label: 'inputRadio.options.first' },
      { value: 2, label: 'inputRadio.options.second' },
    ],
    validations: { required }
  },
})

export default schema
