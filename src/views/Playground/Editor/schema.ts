import { createForm } from '@src/composables'
import { required } from '@src/utils/validators'

const schema = createForm({
  inputEditor: {
    type: 'editor',
    label: 'editor.label',
    placeholder: 'editor.placeholder',
    validations: { required }
  },
})

export default schema
