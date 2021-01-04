import { mount } from '@vue/test-utils'
import InputSelect from '/@wg3/components/Form/Input/Select.vue'

const mock = {
  name: 'inputName',
  placeholder: 'placeholder-value',
  options: [{ value: 1, label: 'option 1' }],
  errors: ['Error 1'],
  disabled: false,
  readonly: false
}

describe('/@components/Form/Input/Select.spec.ts', () => {
  const wrapper = mount(InputSelect, {
    attachTo: document.documentElement,
    props: mock
  })

  test('Renders select and option tags properly', () => {
    const { value } = mock.options[0]
    expect(wrapper.find(`[data-test="select"]`).exists()).toBe(true)
    expect(wrapper.find(`option[value="${value}"]`).exists()).toBe(true)
    expect(wrapper.find(`option[value="${value}"]`).text()).toBe('option 1')
  })

  test('Renders the input name properly', () => {
    expect(wrapper.find(`[name="${mock.name}"]`).exists()).toBe(true)
  })

  test('Toggles placeholder depending on value', async () => {
    expect(wrapper.find(`[data-test="placeholder"]`).exists()).toBe(true)
    expect(wrapper.find(`[data-test="selected"]`).exists()).toBe(false)
    await wrapper.setProps({ value: 1 })
    expect(wrapper.find(`[data-test="placeholder"]`).exists()).toBe(false)
    expect(wrapper.find(`[data-test="selected"]`).exists()).toBe(true)
  })

  test('Renders the "invalid" class on errors detected', () => {
    expect(wrapper.find('[data-test="input"]').classes('input:select--invalid')).toBe(true)
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
