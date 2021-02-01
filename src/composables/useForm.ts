import { reactive, computed } from 'vue'

/**
 * This function ensures that the given schema has the proper structure,
 * then returns it as a vue reactive object
 */
export function createForm(schema: FormSchema) {
  for (let inputName in schema) {
    let input = schema[inputName]

    if (!('value' in input)) {
      input.value = ''
    }

    if (!('errors' in input)) {
      input.errors = []
    }
  }

  return reactive(schema)
}

/**
 * This composable will export a set of controllers/data for a given schema object
 */
export function useForm(schema: FormSchema) {
  const entries = computed(() => Object.entries(schema))
  
  /**
   * This computed variable will return a simplified version of the schema object,
   * containing only each input name as a key, and the input.value as their values 
   *
   * For example:
   * 
   * {
   *   name: "My Name",
   *   email: "my@email.com",
   *   ...
   * }
   */
  const data = computed(() => {
    let data: { [inputName: string]: any } = {}
    for (let inputName in schema) {
      data[inputName] = schema[inputName].value
    }
    return data
  })

  /**
   * This computed variable will return a simplified version of the schema object,
   * containing only each input name as a key, and the input.errors array as their values 
   *
   * For example:
   * 
   * {
   *   name: ["Required input", ...],
   *   email: ["Invalid e-mail", ... ],
   *   ...
   * }
   */
  const errors = computed(() => {
    let errors: { [inputName: string]: string[] } = {}
    for (let inputName in schema) {
      errors[inputName] = schema[inputName].errors || []
    }
    return errors
  }) 

  /**
   * This function will validate each schema input value
   * with their given validation functions. It also populates  
   * their errors array with every failed validation message.
   *
   * After all validations are processed (sync and async),
   * a boolean value is returned as the validation result:
   *
   * true for no errors found
   * false for any errors found
   */
  async function validate() {
    for (let name in schema) {
      let input = schema[name]
      let { value, validations } = input

      // Reseting errors array
      input.errors = [] 

      for (let key in validations) {
        let { handler, message } = validations[key]

        // Awaits for async validations as well
        let error = await handler(value)

        if (error) {
          input.errors.push(message)
        }
      }
    }

    // Checks for any input that contains a pending error
    const query = ({ errors }: FormInput) => errors?.length
    return !Object.values(schema).some(query)
  }

  return {
    data,
    schema,
    errors,
    entries,
    validate
  }
}
