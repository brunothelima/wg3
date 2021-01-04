import { WgValidator } from '/@src/types/form'

interface MinLengthValidator {
  (limit: number): WgValidator
}

const validator: MinLengthValidator = (limit: number) => ({
  message: `This input must have ${limit} or more characters`,
  handler: (value: string) => value.length >= limit
})

export default validator
