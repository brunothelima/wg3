import { useForm, createForm } from '@src/composables'
import { required } from '@src/utils/validators'

const mock = {
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

describe('@src/composables/useForm', () => {
  const source = createForm(mock)

  test('Sets the required properties to the schema object', () => {
    expect(source.inputName.value).toBe('')
    expect(source.inputName.errors).toStrictEqual([])
  })

  test('Computed "data" reacts to inputed value', () => {
    const { schema, data } = useForm(source)

    expect(data.value).toMatchObject({ inputName: '' })

    schema.inputName.value = 'test-value'

    expect(data.value).toMatchObject({ inputName: 'test-value' })
  })

  test('validate() function handles properly the given validation methods', async () => {
    const { schema, validate } = useForm(source)

    expect(schema.inputName.errors?.length).toBe(0)

    schema.inputName.value = ''

    await validate()

    expect(schema.inputName.errors?.length).toBe(1)
  })

  test('Computed "errors" reacts to the validate() function call', async () => {
    const { schema, validate, errors } = useForm(source)

    schema.inputName.value = ''

    expect(errors.value).toMatchObject({})

    await validate()

    expect(errors.value).toStrictEqual({ inputName: ['Test Message'] })
  })
})
