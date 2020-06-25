import { FormValidator } from '/@types/form'
import v from 'validator'

const validator: FormValidator = {
  message: 'Invalid email',
  handler: (value: string) => !v.isEmail(value)
}

export default validator
