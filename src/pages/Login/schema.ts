import { createForm } from '@src/composables'
import { required, email } from '@src/utils/validators/index'

const schema = createForm({
  email: {
    type: 'Text',
    label: 'Email',
    placeholder: 'email.placeholder',
    validations: {
      email: { ...email, message: 'email.isEmail' },
      required: { ...required, message: 'email.required' }
    }
  },
  password: {
    type: 'Password',
    label: 'password.label',
    placeholder: 'password.placeholder',
    validations: {
      required: { ...required, message: 'password.required' }
    }
  }
})

export default schema
