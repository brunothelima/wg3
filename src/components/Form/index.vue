<template>
  <form data-test="form" @submit="onSubmitHandler" class="form">
    <pre>{{data}}</pre><br><br><br>
    <div class="form__grid">
      <Field v-for="[name, input] in entries" :key="name" :input="input" :id="`${name}Id`" :messages="messages">
        <component v-bind="input" @input="onInputHandler" :is="`input-${input.type}`" :name="name" :messages="messages" />
      </Field>
    </div>
    <slot />
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { useForm } from '/@src/composables/useForm'
import { useI18n } from '/@src/composables/useI18n'
import { I18nMessages, FormSchema } from '/@src/types'

import Field from './Field.vue'
import InputText from './Input/Text.vue'
import InputSelect from './Input/Select.vue'
import InputPassword from './Input/Password.vue'
import InputMoney from './Input/Money.vue'
import InputFile from './Input/File.vue'
import InputDate from './Input/Date.vue'
import InputCheckbox from './Input/Checkbox.vue'
import InputToggle from './Input/Toggle.vue'

export default defineComponent({
  props: {
    schema: Object as PropType<FormSchema>,
    messages: Object as PropType<I18nMessages>,
  },
  components: {
    Field,
    InputText,
    InputSelect,
    InputPassword,
    InputMoney,
    InputFile,
    InputDate,
    InputCheckbox,
    InputToggle
  },
  setup(props, context) {
    const { schema, data, validate } = useForm(props.schema || {})

    const entries = computed(() => Object.entries(schema))

    /**
     * This function updates the schema with the new input value
     * and calls onInput callback if one is given in the schema
     */
    const onInputHandler = (ev: InputEvent) => {
      const { name, value, files, checked, type } = ev.target as HTMLInputElement
      const input = schema[name]

      // Updating the schema input value
      input.errors = []
      
      switch (type) {
        case 'file': input.value = files?.[0] 
          break;
        case 'checkbox': input.value = checked       
          break;
        default: input.value = value
          break;
      }

      // Checking and calling the event calback function
      if (input.events && input.events.onInput) {
        input.events.onInput({ ev, schema })
        context.emit('callback', 'onInput')
      }

      context.emit('input', { ev, value })
    }

    const onSubmitHandler = async (ev: InputEvent) => {
      ev.preventDefault()

      context.emit('submit', { ev, data: data.value })

      // Awaits for the validation result
      const isValid = await validate()

      if (isValid) {
        // Emiting success event if no error is found
        context.emit('success', { ev, data: data.value })
        return
      }

      context.emit('error', { ev, data: data.value })
    }

    return {
      data,
      entries,
      onInputHandler,
      onSubmitHandler
    }
  }
})
</script>
