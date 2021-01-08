import v from 'validator'

const validator: FormValidator = {
  message: 'This input is required',
  handler: (value: any) => v.isEmpty(String(value))
}

export default validator
