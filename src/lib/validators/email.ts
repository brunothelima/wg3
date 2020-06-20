import { FormValidator } from '../../types'
import v from 'validator'

const validator: FormValidator = {
  message: 'Invalid email',
  handler: (value: string) => !v.isEmail(value)
}

export default validator
