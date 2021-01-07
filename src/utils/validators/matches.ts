import v from 'validator'

interface MatchesValidator {
  (pattern: string): FormValidator
}

const validator: MatchesValidator = (pattern: string) => ({
  message: `Invalid format`,
  handler: (value: any) => v.matches(value, pattern)
})

export default validator
