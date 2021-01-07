import { mount } from '@vue/test-utils'
import { createForm, useForm } from '@src/composables'
import flushPromises from 'flush-promises'
import { required } from '@src/utils/validators'
import InputText from '@src/components/Form/Input/Text.vue'
import Form from '@src/components/Form/index.vue'

const mock = createForm({
  name: {
    type: 'text',
    validations: { required }
  },
  password: {
    type: 'password',
    validations: { required },
    events: {
      onInput: ({ ev, schema }) => {
        schema.name.value = 'callback-value'
      }
    }
  }
})

describe('@src/components/Form/index.spec.ts', () => {
  const { schema } = useForm(mock)
  const locale = { en: {}, pt: {} }

  const wrapper = mount(Form, {
    global: { components: { InputText } },
    props: { schema, locale }
  })

  test('Render the inputs given as schema wrapped in fields', () => {
    expect(wrapper.findAll('[data-test="field"]').length).toBe(2)
    expect(wrapper.find('[name="name"]').exists()).toBe(true)
    expect(wrapper.find('[name="password"]').exists()).toBe(true)
  })

  test('Updates the schema ref on input value change', async () => {
    const value = 'test-value'

    await wrapper.find('[name="name"]').setValue(value)

    expect(wrapper.emitted()).toHaveProperty('input')
    expect(schema.name.value).toBe(value)
  })

  test('Updates the schema on a custom input callback', async () => {
    const value = 'test-value'

    await wrapper.find('[name="password"]').setValue(value)

    expect(wrapper.emitted()).toHaveProperty('callback')
    expect(schema.name.value).toBe('callback-value')
  })

  test('Triggers onSubmitHandler if and emmit error callback', async () => {
    wrapper.find('[name="name"]').setValue('')
    wrapper.find('[name="password"]').setValue('')
    wrapper.find('[data-test="form"]').trigger('submit')

    await flushPromises()

    expect(wrapper.emitted()).toHaveProperty('submit')
    expect(wrapper.emitted()).toHaveProperty('error')
  })

  test('Triggers onSubmitHandler if and emmit success callback', async () => {
    wrapper.find('[name="name"]').setValue('test-value')
    wrapper.find('[name="password"]').setValue('test-value')
    wrapper.find('[data-test="form"]').trigger('submit')

    await flushPromises()

    expect(wrapper.emitted()).toHaveProperty('submit')
    expect(wrapper.emitted()).toHaveProperty('success')
  })
})
