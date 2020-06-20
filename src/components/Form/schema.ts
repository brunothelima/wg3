import { createForm } from '../../composables/useForm'
import { required } from '../../lib/validators'

const schema = createForm({
  inputText: {
    type: 'text',
    label: 'Text input',
    validations: { required },
    events: {
      onInput: (ev, schema) => console.log(ev, schema)
    }
  },
  inputSelect: {
    type: 'select',
    label: 'Select input',
    placeholder: 'Select an option',
    options: [
      { value: 1, label: 'First option' },
      { value: 2, label: 'Second option' },
      { value: 3, label: 'Third option' }
    ],
    validations: { required },
    events: {
      onInput: (ev, schema) => console.log(ev, schema)
    }
  },
  inputRadio: {
    type: 'radio',
    label: 'Radio input',
    options: [
      { value: 1, label: 'First option' },
      { value: 2, label: 'Second option' },
      { value: 3, label: 'Third option' }
    ],
    validations: { required },
    events: {
      onInput: (ev, schema) => console.log(ev, schema)
    }
  },
  inputCheckbox: {
    type: 'checkbox',
    label: 'Checkbox input',
    title: 'Click check the box',
    events: {
      onInput: (ev, schema) => console.log(ev, schema)
    }
  },
  inputTextarea: {
    type: 'textarea',
    label: 'Textarea input',
    validations: { required },
    events: {
      onInput: (ev, schema) => console.log(ev, schema)
    }
  },
  inputRange: {
    type: 'range',
    label: 'Range input',
    min: 0,
    max: 40,
    step: 2,
    validations: { required },
    events: {
      onInput: (ev, schema) => console.log(ev, schema)
    }
  }
})

export default schema
