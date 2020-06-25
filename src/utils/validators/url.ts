import { FormValidator } from '/@types/form'
import v from 'validator'

const validator: FormValidator = {
  message: 'Url format invalid',
  handler: (value: string) => v.isURL(value)
}

export default validator
