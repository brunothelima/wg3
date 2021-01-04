import { FormValidator } from '/@wg3/types/form'
import v from 'validator'

const validator: FormValidator = {
  message: 'This input is required',
  handler: (value: string) => v.isEmpty(value)
}

export default validator
