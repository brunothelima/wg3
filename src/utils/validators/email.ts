import v from 'validator'

const validator: FormValidator = {
  message: 'Invalid email',
  handler: (value: any) => !v.isEmail(value)
}

export default validator
