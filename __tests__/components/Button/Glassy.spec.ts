import { mount } from '@vue/test-utils'
import Glassy from '@src/components/Button/Glassy.vue'

describe('@src/components/Button/Glassy.spec.ts', () => {
  test('Renders a button with button:glassy class', () => {
    const wrapper = mount(Glassy)
    const button = wrapper.find('[data-test="glassy"]')
    expect(button.classes('button:glassy')).toBe(true)
  })
})
