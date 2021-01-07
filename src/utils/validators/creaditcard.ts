import v from 'validator'

const validator: FormValidator = {
  message: 'Invalid credit card number',
  handler: (value: any) => v.isCreditCard(value)
}

export default validator
