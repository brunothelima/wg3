import { useForm, createForm } from '/@composables/useForm'
import { required, email } from '/@lib/validators'
import { FormSchema } from '/@types/form'

const mock: FormSchema = {
  inputName: {
    type: 'text',
    validations: {
      required: { ...required, message: 'Test Message' }
    },
    events: {
      onInput: () => {}
    }
  }
}

describe('useForm', () => {
  test('Sets the required properties to the schema object', () => {
    const source = createForm(mock)

    expect(source.inputName.value).toBe('')
    expect(source.inputName.errors).toStrictEqual([])
  })

  test('Computed "data" reacts to inputed value', () => {
    const source = createForm(mock)
    const { schema, data } = useForm(source)

    expect(data.value).toMatchObject({ inputName: '' })

    schema.inputName.value = 'test-value'

    expect(data.value).toMatchObject({ inputName: 'test-value' })
  })

  test('validate() function handles properly the given validation methods', async () => {
    const source = createForm(mock)
    const { schema, validate } = useForm(source)

    expect(schema.inputName.errors.length).toBe(0)

    schema.inputName.value = ''

    await validate()

    expect(schema.inputName.errors.length).toBe(1)
  })

  test('Computed "errors" reacts to the validate() function call', async () => {
    const source = createForm(mock)
    const { schema, validate, errors } = useForm(source)

    schema.inputName.value = ''

    expect(errors.value).toMatchObject({})

    await validate()

    expect(errors.value).toStrictEqual({ inputName: ['Test Message'] })
  })
})
