import { mount } from '@vue/test-utils'
import Field from '/@components/Form/Field.vue'

describe('/@components/Form/Field.spec.ts', () => {
  test('Renders error messages list properly', () => {
    const errors = ['Error 1', 'Error 2']
    const wrapper = mount(Field, {
      props: { input: { errors } }
    })

    expect(wrapper.find('[data-test="errors"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-test="errors"] li').length).toBe(2)
  })

  test('Renders a given detail string', () => {
    const detail = 'Detail test'
    const wrapper = mount(Field, {
      props: { input: { detail } }
    })

    expect(wrapper.find('[data-test="detail"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="detail"]').text()).toBe(detail)
  })

  test('Renders label for a given input id', async () => {
    const id = 'testId'
    const label = 'Detail test'
    const wrapper = mount(Field, {
      attachTo: document.body,
      props: { input: { label }, id },
      slots: { default: `<input id="${id}" />` }
    })

    expect(wrapper.find('[data-test="label"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="label"]').text()).toBe(label)
    expect(wrapper.find('[data-test="label"]').attributes('for')).toBe(id)
    expect(wrapper.find(`#${id}`).exists()).toBe(true)
  })
})
