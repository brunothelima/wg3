import { FormValidator } from '../../types'

interface MaxLengthValidator {
  (limit: number): FormValidator
}

const validator: MaxLengthValidator = (limit: number) => ({
  message: `This input must have ${limit} or fewer characters`,
  handler: (value: string) => value.length <= limit
})

export default validator
