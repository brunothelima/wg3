import { defineAsyncComponent } from 'vue';

export const InputText = defineAsyncComponent(() => import('./Text.vue'))
export const InputSelect = defineAsyncComponent(() => import('./Select.vue'))
export const InputPassword = defineAsyncComponent(() => import('./Password.vue'))
export const InputMoney = defineAsyncComponent(() => import('./Money.vue'))
export const InputFile = defineAsyncComponent(() => import('./File.vue'))
export const InputDate = defineAsyncComponent(() => import('./Date.vue'))
export const InputRadio = defineAsyncComponent(() => import('./Radio.vue'))
export const InputCheckbox = defineAsyncComponent(() => import('./Checkbox.vue'))
export const InputToggle = defineAsyncComponent(() => import('./Toggle.vue'))
export const InputTextarea = defineAsyncComponent(() => import('./Textarea.vue'))
export const InputEditor = defineAsyncComponent(() => import('./Editor.vue'))