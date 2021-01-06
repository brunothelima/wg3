import { createForm } from '@src/composables/useForm'

const schema = createForm({
  inputText: {
    type: 'text',
    label: 'text.label',
    placeholder: 'text.placeholder'
  },
  inputPassword: {
    type: 'password',
    label: 'password.label',
    placeholder: 'password.placeholder'
  },
  inputSelect: {
    type: 'select',
    label: 'select.label',
    placeholder: 'select.placeholder',
    options: [
      { value: 1, label: 'select.options.first' },
      { value: 2, label: 'select.options.second' },
      { value: 3, label: 'select.options.third' }
    ]
  },
  inputMoney: {
    type: 'money',
    label: 'money.label',
    placeholder: 'money.placeholder',
    currency: 'R$'
  },
  inputFile: {
    type: 'file',
    label: 'file.label',
    placeholder: 'file.placeholder',
  },
  inputDate: {
    type: 'date',
    label: 'date.label',
    placeholder: 'date.placeholder',
    mode: 'single',
    help: 'date.help'
  },
  inputCheckbox: {
    type: 'checkbox',
    label: 'checkbox.label',
    title: 'checkbox.title'
  },
  inputToggle: {
    type: 'toggle',
    label: 'toggle.label',
    title: 'toggle.title'
  },
  inputRadio: {
    type: 'radio',
    label: 'radio.label',
    options: [
      { value: 1, label: 'radio.options.first' },
      { value: 2, label: 'radio.options.second' },
    ]
  },
})

export default schema
