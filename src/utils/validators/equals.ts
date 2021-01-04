import { FormValidator } from '/@wg3/types/form'
import v from 'validator'

interface EqualsValidator {
  (comparison: string): FormValidator
}

const validator: EqualsValidator = (comparison: any) => ({
  message: `Invalid format`,
  handler: (value: any) => v.equals(value, comparison)
})

export default validator
