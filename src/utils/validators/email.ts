function isEmail(email: string) {
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(String(email).toLowerCase());
}
export default {
  message: `Invalid email format`,
  handler: (value: any) => !isEmail(value)
} as FormValidator