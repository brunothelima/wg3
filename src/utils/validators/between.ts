import { FormValidator } from '../../types'

interface BetweenValidator {
  (min: number, max: number): FormValidator
}

const validator: BetweenValidator = (min: number, max: number) => ({
  message: `This input must be a number between ${min} and ${max}`,
  handler: (value: string) => +value >= min && +value <= max
})

export default validator