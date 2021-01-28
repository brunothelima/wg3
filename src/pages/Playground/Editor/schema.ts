import { createForm } from '@src/composables'
import { required } from '@src/utils/validators'

const schema = createForm({
  inputEditor: {
    type: 'Editor',
    label: 'inputEditor.label',
    placeholder: 'inputEditor.placeholder',
    validations: { required }
  },
})

export default schema
