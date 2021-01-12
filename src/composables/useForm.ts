import { reactive, computed } from 'vue'

/**
 * Clones the given schema and insures it has the correct structure
 */
export const createForm = (source: FormSchema) => {
  for (let input of Object.values(source)) {
    if (!('value' in input)) {
      input.value = ''
    }

    if (!('errors' in input)) {
      input.errors = []
    }
  }
  return reactive(source)
}

export const useForm = (schema: FormSchema) => {
  /**
   * Computed variable, containing a reduced object
   * with the given schema inputs names as keys and
   * the inputs current values as the keys values,
   *
   * console.log(data);
   *
   * // {
   * //   name: "My Name",
   * //   email: "my@email.com",
   * //   ...
   * // }
   */
  const data = computed(() => {
    return Object.keys(schema)
      .map((name) => ({ [name]: schema[name].value || '' }))
      .reduce((prev, next) => ({ ...prev, ...next }))
  })

  /**
   * Computed variable, containing a reduced object
   * with only the given schema inputs names as keys and
   * and the inputs current errors array as their values,
   *
   * console.log(errors);
   *
   * // {
   * //   name: ["Required input", ...],
   * //   email: ["Invalid e-mail", ... ],
   * //   ...
   * // }
   */
  const errors = computed(() => {
    return Object.keys(schema)
      .map((name) => ({ [name]: schema[name].errors || [] }))
      .reduce((prev, next) => ({ ...prev, ...next }))
  })

  const update: onUpdateHandler = ([event, inputName, inputValue]) => {
    console.log('form')
    schema[inputName].errors = []
    schema[inputName].value = inputValue
  }

  /**
   * This function iterates over each schema input,
   * validating their values with their specified validators.
   *
   * It also populates their errors array
   * with all the failed validations messages.
   *
   * After all validations are processed (sync and async),
   * a boolean value is returned as the validation result:
   *
   * no errors found => true
   * X errors found => false
   */
  const validate = async () => {
    for (let name in schema) {
      let input = schema[name]

      let { value, validations } = input

      input.errors = [] // Reseting errors array

      for (let key in validations) {
        let { handler, message } = validations[key]

        // Awaits for async validations as well
        let error = await handler(value)

        if (error) {
          input.errors.push(message)
        }
      }
    }
    // Checks for any input that accused an error
    const query = ({ errors }: FormInputTypes) => errors?.length
    return !Object.values(schema).some(query)
  }

  return {
    data,
    schema,
    errors,
    update,
    validate
  }
}
