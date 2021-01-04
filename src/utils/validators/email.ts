import { WgValidator } from '/@src/types/form'
import v from 'validator'

const validator: WgValidator = {
  message: 'Invalid email',
  handler: (value: string) => !v.isEmail(value)
}

export default validator
