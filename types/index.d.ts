declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

declare interface ImportMeta {
  [propertyName: string]: any;
}

declare interface I18nMessages {
  [key: string]: string | I18nMessages
}

declare interface CustomNotification {
  message: string
  status?: string
  timeout?: any
}