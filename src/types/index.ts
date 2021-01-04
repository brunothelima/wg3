export * from './form'
export * from './i18n'

export interface WgNotification {
  message: string
  status?: string
  timeout?: any
}

export interface WgImage {
  w: number,
  h: number,
  x: number,
  y: number,
  src: string,
  ratio: string,
  smart: boolean
}
