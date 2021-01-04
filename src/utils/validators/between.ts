import { WgValidator } from '/@src/types/form'

interface BetweenValidator {
  (min: number, max: number): WgValidator
}

const validator: BetweenValidator = (min: number, max: number) => ({
  message: `This input must be a number between ${min} and ${max}`,
  handler: (value: string) => +value >= min && +value <= max
})

export default validator
