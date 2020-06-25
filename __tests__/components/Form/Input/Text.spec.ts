import { mount } from '@vue/test-utils'
import InputText from '/@components/Form/Input/Text.vue'

const mock = {
  name: 'inputName',
  placeholder: 'placeholder-value',
  disabled: false,
  readonly: false
}

describe('/@components/Form/Input/Text.spec.ts', () => {
  const wrapper = mount(InputText, {
    props: mock
  })

  test('Checks if the input type is text', () => {
    expect(wrapper.find(`[type="text"]`).exists()).toBe(true)
  })

  test('Renders the input name properly', () => {
    expect(wrapper.find(`[name="${mock.name}"]`).exists()).toBe(true)
  })

  test('Renders the input placeholder properly', async () => {
    const placeholder = 'placeholder-test'
    await wrapper.setProps({ placeholder })
    expect(wrapper.find(`[placeholder="${placeholder}"]`).exists()).toBe(true)
  })

  test('Renders the "invalid" class on errors detected', async () => {
    expect(wrapper.find('[data-test="input"]').classes('input:text--invalid')).toBe(false)
    await wrapper.setProps({ errors: ['Error'] })
    expect(wrapper.find('[data-test="input"]').classes('input:text--invalid')).toBe(true)
  })

  test('Disable prop disables the input properly', async () => {
    expect(wrapper.find(`[disabled]`).exists()).toBe(false)
    await wrapper.setProps({ disabled: true })
    expect(wrapper.find(`[disabled]`).exists()).toBe(true)
  })

  test('Readonly prop makes the input readonly correctly', async () => {
    expect(wrapper.find(`[readonly]`).exists()).toBe(false)
    await wrapper.setProps({ readonly: true })
    expect(wrapper.find(`[readonly]`).exists()).toBe(true)
  })
})
