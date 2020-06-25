import { mount } from '@vue/test-utils'
import InputPassword from '/@components/Form/Input/Password.vue'

describe('/@components/Form/Input/Password.spec.ts', () => {
 
  const wrapper = mount(InputPassword, {
    props: { name: 'password' }
  })

  test('Renders the input name properly', () => {
    expect(wrapper.find(`[name="password"]`).exists()).toBe(true)
  })

  test('Renders the input placeholder properly', async () => {
    const placeholder = 'placeholder-test'
    await wrapper.setProps({ placeholder })
    expect(wrapper.find(`[placeholder="${placeholder}"]`).exists()).toBe(true)
  })
  
  test('Renders the "invalid" class on errors detected', async () => {
    expect(wrapper.find('[data-test="input"]').classes('input:password--invalid')).toBe(false)
    await wrapper.setProps({ errors: ['Error'] })
    expect(wrapper.find('[data-test="input"]').classes('input:password--invalid')).toBe(true)
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


  test('Toggles the input type between password/text on user action', async () => {
    await wrapper.find('[data-test="icon"]').trigger('click')
    expect(wrapper.find(`[type="text"]`).exists()).toBe(true)
    await wrapper.find('[data-test="icon"]').trigger('click')
    expect(wrapper.find(`[type="password"]`).exists()).toBe(true)
  })
  
})