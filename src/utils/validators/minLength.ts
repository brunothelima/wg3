export default function (limit: number): FormValidator {
  return {
    message: `This input must have ${limit} or more characters`,
    handler: (value: any) => value.length >= limit
  }
}