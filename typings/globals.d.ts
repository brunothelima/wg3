declare interface I18n {
  t(messages: I18nMessages): string
  locale: import("vue").Ref<'pt' | 'en'>;
}

declare interface I18nMessages {
  [key: string]: string | I18nMessages
}

declare interface CustomNotification {
  message: string
  status?: string
  timeout?: any
}