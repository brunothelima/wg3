import v from 'validator'

const validator: FormValidator = {
  message: 'Url format invalid',
  handler: (value: any) => v.isURL(value)
}

export default validator
