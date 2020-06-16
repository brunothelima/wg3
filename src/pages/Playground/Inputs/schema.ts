import { createForm } from "../../../composables/useForm";

const schema = createForm({
  inputText: {
    type: "text",
    label: "text.label",
    placeholder: "text.placeholder",
  },
  inputPassword: {
    type: "password",
    label: "password.label",
    placeholder: "password.placeholder",
  },
  inputSelect: {
    type: "select",
    label: "select.label",
    placeholder: "select.placeholder",
    options: [
      { value: 1, label: "select.options.first" },
      { value: 2, label: "select.options.second" },
      { value: 3, label: "select.options.third" },
    ],
  },
});

export default schema;
