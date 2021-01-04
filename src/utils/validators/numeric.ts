import { WgValidator } from '/@src/types/form'
import v from 'validator'

const validator: WgValidator = {
  message: 'Invalid numeric value',
  handler: (value: string) => v.isNumeric(value)
}

export default validator
