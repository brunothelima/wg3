import { FormValidator } from '/@wg3/types/form'
import v from 'validator'

const validator: FormValidator = {
  message: 'Invalid numeric value',
  handler: (value: string) => v.isNumeric(value)
}

export default validator
