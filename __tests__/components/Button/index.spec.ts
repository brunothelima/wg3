import { mount } from '@vue/test-utils'
import Button from '/@wg3/components/Button/index.vue'

describe('/@components/Button/index.spec.ts', () => {
  test('Rendering a button with default settings', () => {
    const wrapper = mount(Button)
    const button = wrapper.find('[data-test="button"]')

    expect(button.attributes('disabled')).toBeFalsy()
    expect(button.classes()).toContain('button')
    expect(button.classes()).toContain('button:glassy')
    expect(button.classes()).toContain('button--medium')
  })

  test('Renders a flex reversed button content', () => {
    const wrapper = mount(Button, {
      props: { reverse: true }
    })

    const button = wrapper.find('[data-test="button"]')
    expect(button.classes()).toContain('button--reverse')
  })

  test('Renders a button with the default slot content', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Click Here' }
    })

    const slot = wrapper.find('[data-test="slot"]')
    expect(slot.text()).toBe('Click Here')
  })

  test('Renders a button with a given icon', () => {
    const wrapper = mount(Button, {
      props: { icon: 'icon-*' }
    })

    const icon = wrapper.find('[data-test="icon"]')
    expect(icon.exists()).toBe(true)
    expect(icon.classes()).toContain('icon-*')
  })

  test('Renders a button with a given skin', () => {
    const wrapper = mount(Button, {
      props: { skin: 'ghosty' }
    })

    const button = wrapper.find('[data-test="button"]')
    expect(button.classes()).toContain('button:ghosty')
  })

  test('Renders a button with a given size', () => {
    const wrapper = mount(Button, {
      props: { size: 'big' }
    })

    const button = wrapper.find('[data-test="button"]')
    expect(button.classes()).toContain('button--big')
  })
})
