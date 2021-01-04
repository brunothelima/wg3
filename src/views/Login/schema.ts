import { createForm } from '/@src/composables/useForm'
import { required, email } from '/@src/utils/validators/index'

const schema = createForm({
  email: {
    type: 'text',
    label: 'Email',
    placeholder: 'email.placeholder',
    validations: {
      email: { ...email, message: 'email.isEmail' },
      required: { ...required, message: 'email.required' }
    }
  },
  password: {
    type: 'password',
    label: 'password.label',
    placeholder: 'password.placeholder',
    validations: {
      required: { ...required, message: 'password.required' }
    }
  }
})

export default schema
