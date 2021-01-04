import { WgValidator } from '/@src/types/form'
import v from 'validator'

const validator: WgValidator = {
  message: 'Invalid credit card number',
  handler: (value: string) => v.isCreditCard(value)
}

export default validator
