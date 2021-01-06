export * from './Form'

export interface I18nMessages {
  [key: string]: string | I18nMessages
}
export interface Notification {
  message: string
  status?: string
  timeout?: any
}
