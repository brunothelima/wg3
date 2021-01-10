import { defineAsyncComponent } from 'vue';

export { default as InputPassword } from './Password.vue'

export { default as InputSelect } from './Select.vue'
export { default as InputSelectMagic } from './SelectMagic.vue'

export { default as InputFile } from './File.vue'

export { default as InputRadio } from './Radio.vue'
export { default as InputCheckbox } from './Checkbox.vue'
export { default as InputToggle } from './Toggle.vue'

export { default as InputText } from './Text.vue'
export { default as InputTextarea } from './Textarea.vue'
export { default as InputTextMagic } from './TextMagic.vue'
export { default as InputTextButton } from './TextButton.vue'

export const InputMoney = defineAsyncComponent(() => import('./Money.vue'))
export const InputDate = defineAsyncComponent(() => import('./Date.vue'))
export const InputEditor = defineAsyncComponent(() => import('./Editor.vue'))