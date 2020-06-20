import router from '../router'
import { User, LoginData } from '../types'
import { useUser } from './useUser'
import { useNotifications } from './useNotifications'
import { useI18n } from './useI18n'

// API URL
const apiURL = process.env.VUE_APP_API_URL

/**
 * Exports the login/logout handlers method
 */
export const useAuth = () => {
  const login = async (data: LoginData) => {
    // User store data  ref
    const { user } = useUser()
    // Notification manager
    const { notify } = useNotifications()

    try {
      // Send the login data for the server validation
      const request = await fetch(`${apiURL}/login`, {
        method: 'POST',
        body: JSON.stringify(data)
      })

      // User data
      const result: { data: User; message: string } = await request.json()

      // Storing the retrieved user data
      user.value = result.data

      // Translation for the notification
      const { t } = useI18n({
        en: { message: 'Welcome, ' + user.value.name },
        pt: { message: 'Seja bem vindo, ' + user.value.name }
      })

      // Notifying the user hes/shes logged in
      notify({ message: t('message'), status: 'success' })

      // Sending user to the dashboard
      // TODO: Redirect user to the desired blocked url (request-uri)
      router.push('/')
      return
    } catch (error) {
      console.error(error)

      const { t } = useI18n({
        en: { message: 'Invalid email or password' },
        pt: { message: 'Email ou senha invalidos' }
      })

      // Notifying "user not found" message
      notify({ message: t('message'), status: 'error' })

      // Resets user store
      user.value = {} as User
    }
  }

  return {
    login
  }
}
