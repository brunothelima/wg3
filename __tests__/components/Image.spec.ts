import { mount } from '@vue/test-utils'
import Image from '/@src/components/Image.vue'

describe('/@src/components/Image.spec.ts', () => {
  test('Renders a button with button:glassy class', async () => {
    const wrapper = mount(Image, {
      props: { src: 'image1.jpg' }
    })
    expect(wrapper.find('[data-test="image"]').exists()).toBe(true)
  })
})
