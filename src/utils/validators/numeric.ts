import v from 'validator'

const validator: FormValidator = {
  message: 'Invalid numeric value',
  handler: (value: any) => v.isNumeric(value)
}

export default validator
