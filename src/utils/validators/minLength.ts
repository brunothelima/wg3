import { FormValidator } from '/@wg3/types/form'

interface MinLengthValidator {
  (limit: number): FormValidator
}

const validator: MinLengthValidator = (limit: number) => ({
  message: `This input must have ${limit} or more characters`,
  handler: (value: string) => value.length >= limit
})

export default validator
