export default {
  message: 'This input is required',
  handler: (value: any) => String(value).length < 1
} as FormValidator

