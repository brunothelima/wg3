import { WgValidator } from '/@src/types/form'
import v from 'validator'

const validator: WgValidator = {
  message: 'This input is required',
  handler: (value: string) => v.isEmpty(value)
}

export default validator
