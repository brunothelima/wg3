declare interface CustomButton {
  icon?: string
  skin?: 'glassy' | 'ghosty' | 'default'
  tag?: 'a' | 'span' | 'button' | 'div'
  size?: 'small' | 'medium' | 'large'
  reverse?: boolean,
  disabled?: boolean,
}

declare type CustomButtonTags = 'a' | 'span' | 'button' | 'div'
declare type CustomButtonSizes = 'small' | 'medium' | 'large'
declare type CustomButtonSkins = 'glassy' | 'ghosty' | 'default'