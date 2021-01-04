import { ref } from 'vue'
import { WgNotification } from '/@src/types'

// Notification messages store
const notifications = ref([] as WgNotification[])

/**
 * Notification messages handler.
 */
export const useNotifications = () => {
  // Dismisses a message by its index
  const dismiss = (index: number) => {
    clearTimeout(notifications.value[index].timeout)
    notifications.value.splice(index, 1)
  }

  // Creates a notification cycle
  const notify = (notification: WgNotification) => {
    notifications.value.push(notification)

    // Notification cycle of 6 seconds
    notification.timeout = setTimeout(() => {
      notifications.value.splice(notifications.value.indexOf(notification), 1)
    }, 6000)
  }

  return {
    notify,
    dismiss,
    notifications
  }
}
