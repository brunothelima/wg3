import { WgValidator } from '/@src/types/form'
import v from 'validator'

const validator: WgValidator = {
  message: 'Url format invalid',
  handler: (value: string) => v.isURL(value)
}

export default validator
