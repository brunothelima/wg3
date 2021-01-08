import { ref } from 'vue'

// Notification messages store
const list = ref([] as CustomNotification[])

/**
 * Notification messages handler.
 */
export const useNotifications = () => {
  // Dismisses a message by its index
  const dismiss = (index: number) => {
    clearTimeout(list.value[index].timeout)
    list.value.splice(index, 1)
  }

  // Creates a notification cycle
  const notify = (notification: CustomNotification) => {
    list.value.push(notification)

    // Notification cycle of 6 seconds
    notification.timeout = setTimeout(() => {
      list.value.splice(list.value.indexOf(notification), 1)
    }, 6000)
  }

  return {
    list,
    notify,
    dismiss
  }
}
