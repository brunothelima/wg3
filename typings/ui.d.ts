declare interface CustomButton {
  icon?: string
  skin?: 'glassy' | 'ghosty' | 'default'
  tag?: 'a' | 'span' | 'button' | 'div'
  size?: 'small' | 'medium' | 'large'
  reverse?: boolean,
  disabled?: boolean,
}