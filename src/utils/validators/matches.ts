import { WgValidator } from '/@src/types/form'
import v from 'validator'

interface MatchesValidator {
  (pattern: string): WgValidator
}

const validator: MatchesValidator = (pattern: string) => ({
  message: `Invalid format`,
  handler: (value: string) => v.matches(value, pattern)
})

export default validator
