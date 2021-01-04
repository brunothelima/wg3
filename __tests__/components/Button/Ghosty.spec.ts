import { mount } from '@vue/test-utils'
import Ghosty from '/@wg3/components/Button/Ghosty.vue'

describe('/@components/Button/Glassy.spec.ts', () => {
  test('Renders a button with button:ghosty class', () => {
    const wrapper = mount(Ghosty)
    const button = wrapper.find('[data-test="ghosty"]')
    expect(button.classes('button:ghosty')).toBe(true)
  })
})
