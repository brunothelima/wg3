<template>
  <form data-test="form" @submit="onSubmitHandler" class="form">
    <!-- <pre>{{data}}</pre><br><br><br> -->
    <div class="form__grid">
      <Field v-for="[name, input] in Object.entries(form.schema)" :key="name" :input="input" :id="`${name}Id`">
        <component :is="InputComponents[input.type]" v-bind="input" :name="name" @update="onUpdateHandler"/>
      </Field>
    </div>
    <slot />
  </form>
</template>

<script lang="ts" setup>
import { provide, defineAsyncComponent, defineProps, defineEmit } from 'vue'
import { glob2Components } from '@src/utils/'
import { useForm, useI18n } from '@src/composables/'

const Field = defineAsyncComponent(() => import('./Field.vue'))
const InputComponents = glob2Components(import.meta.glob('./Input/**.vue'))

const emit = defineEmit()
const props = defineProps<{
  schema: FormSchema,
  messages?: I18nMessages,
}>()

const form = useForm(props.schema)

/**
 * This function handles the custom @update event, which is 
 * emmited by any input from the given form.schema
 * 
 * The @update event is emited right after the native @input event is triggered
 */
function onUpdateHandler([e, inputName, inputValue]: OnUpdateArgs) { 
  let input = form.schema[inputName]
  input.value = inputValue
  input.errors = []
}

/**
 * This function handles the native <form> @submit event
 * 
 * First it awaits the form validation, then emmits the
 * proper callback event abiding by the following rule:
 * 
 * - If the form is valid, the callback emmited is "success"
 * - If the form is invalid, the callback emmited is "error" 
 */
async function onSubmitHandler(event: Event){
  event.preventDefault()
  let isFormValid = await form.validate()

  if (isFormValid) {
    emit('success', form.data)
    return
  }

  emit('error', form.errors)
}

provide('i18n', useI18n(props.messages))
</script>