import { mount } from '@vue/test-utils'
import Glassy from '/@wg3/components/Button/Glassy.vue'

describe('/@components/Button/Glassy.spec.ts', () => {
  test('Renders a button with button:glassy class', () => {
    const wrapper = mount(Glassy)
    const button = wrapper.find('[data-test="glassy"]')
    expect(button.classes('button:glassy')).toBe(true)
  })
})
