import { FormValidator } from "../../types";
import v from "validator";

const validator: FormValidator = {
  message: "Invalid credit card number",
  handler: (value: string) => v.isCreditCard(value),
};

export default validator;
