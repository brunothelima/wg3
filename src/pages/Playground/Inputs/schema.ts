import { createForm } from '/@wg3/composables/useForm'

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
    help: 'Selecione uma data'
  }
})

export default schema
