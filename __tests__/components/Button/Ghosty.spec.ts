import { mount } from '@vue/test-utils'
import Ghosty from '@src/components/Button/Ghosty.vue'

describe('@src/components/Button/Glassy.spec.ts', () => {
  test('Renders a button with button:ghosty class', () => {
    const wrapper = mount(Ghosty)
    const button = wrapper.find('[data-test="ghosty"]')
    expect(button.classes('button:ghosty')).toBe(true)
  })
})
