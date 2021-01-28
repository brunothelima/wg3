export default function(min: number, max: number): FormValidator {
  return {
    message: `This input must be a number between ${min} and ${max}`,
    handler: (value: any) => +value >= min && +value <= max
  }
}
