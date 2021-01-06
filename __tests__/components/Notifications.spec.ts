import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { useNotifications } from '@src/composables/useNotifications'
import Notifications from '@src/components/Notifications.vue'

const mock = {
  message: 'Test Message'
}

describe('@src/components/Notifications.spec.ts', () => {
  const { notify, dismiss, notifications } = useNotifications()

  test('Renders a message correctly after notify() is called', async () => {
    const wrapper = mount(Notifications)

    notify(mock)
    await nextTick()

    const message = wrapper.find('[data-test="message"]')
    expect(message.exists()).toBe(true)

    const i = message.find('[data-test="icon"]')
    expect(i.classes('icon-close-small')).toBe(true)

    const span = message.find('[data-test="text"]')
    expect(span.text()).toBe(mock.message)

    dismiss(0)
  })

  test('Dismisses the message after click on close icon', async () => {
    const wrapper = mount(Notifications)

    notify(mock)
    await nextTick()

    wrapper.find('[data-test="icon"]').trigger('click')
    await nextTick()

    expect(notifications.value.length).toBe(0)
  })
})
