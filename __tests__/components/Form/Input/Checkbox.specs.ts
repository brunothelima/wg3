import { mount } from '@vue/test-utils'
import InputCheckbox from '@src/components/Form/Input/Checkbox.vue'

const mock = {
  name: 'inputName',
  title: 'title-value',
  value: '',
  disabled: false,
  readonly: false
}

describe('@src/components/Form/Input/Checkbox.spec.ts', () => {
  const wrapper = mount(InputCheckbox, {
    props: mock
  })

  test('Checks if the input type is text', () => {
    expect(wrapper.find(`[type="checkbox"]`).exists()).toBe(true)
  })

  test('Renders the input name properly', () => {
    expect(wrapper.find(`[name="${mock.name}"]`).exists()).toBe(true)
  })

  test('Disable prop disables the input properly', async () => {
    expect(wrapper.find(`[disabled]`).exists()).toBe(false)
    await wrapper.setProps({ disabled: true })
    expect(wrapper.find(`[disabled]`).exists()).toBe(true)
  })

  test('Renders the custom checkbox ui properly', () => {
    expect(wrapper.find(`[data-test="ui"]`).exists()).toBe(true)
  })

  // test('Toggles the input checked prop properly', async () => {
  //   await wrapper.find(`[data-test="ui"]`).trigger('click')
  //   expect(wrapper.find(`[data-test="input"]`).classes())
  //     .toContain('input:checkbox--checked')
  // })
})
