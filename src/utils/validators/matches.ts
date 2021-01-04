import { FormValidator } from '/@wg3/types/form'
import v from 'validator'

interface MatchesValidator {
  (pattern: string): FormValidator
}

const validator: MatchesValidator = (pattern: string) => ({
  message: `Invalid format`,
  handler: (value: string) => v.matches(value, pattern)
})

export default validator
