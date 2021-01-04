import { WgValidator } from '/@src/types/form'

interface MaxLengthValidator {
  (limit: number): WgValidator
}

const validator: MaxLengthValidator = (limit: number) => ({
  message: `This input must have ${limit} or fewer characters`,
  handler: (value: string) => value.length <= limit
})

export default validator
