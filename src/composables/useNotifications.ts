import { ref } from 'vue'

const notifications = ref<CustomNotification[]>([])

/**
 * This composable exports the notification center controllers
 */
export const useNotifications = () => {

  /**
   * This function will dismiss a notification 
   * by the matched given index.
   */
  function dismiss(index: number) {
    clearTimeout(notifications.value[index].timeout)
    notifications.value.splice(index, 1)
  }

  /**
   * This function adds a notification to the ui
   * and sets a timeout for it to be dismissed in
   * the correct order.
   */
  function notify(notification: CustomNotification) {
    notifications.value.push(notification)

    // Notification cycle of 6 seconds
    notification.timeout = setTimeout(() => {
      notifications.value.splice(
        notifications.value.indexOf(notification),
        1
      )
    }, 6000)
  }

  return {
    notify,
    dismiss,
    notifications
  }
}
