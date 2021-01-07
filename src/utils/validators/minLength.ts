interface MinLengthValidator {
  (limit: number): FormValidator
}

const validator: MinLengthValidator = (limit: number) => ({
  message: `This input must have ${limit} or more characters`,
  handler: (value: any) => value.length >= limit
})

export default validator
