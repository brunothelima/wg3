export * from './form'
export * from './user'
export * from './auth'
export * from './i18n'

export interface Notification {
  message: string
  status?: string
  timeout?: any
}

export interface LocaleMessages {
  [key: string]: LocaleMessages | string
}
