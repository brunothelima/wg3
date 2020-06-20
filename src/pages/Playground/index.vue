<template>
  <div class="playground">
    <Settings />
    <Colors />
    <Text />
    <Icons />
    <Buttons />
    <Modals />
    <Inputs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Settings from '../../components/Settings.vue'
import Buttons from './Buttons/index.vue'
import Icons from './Icons.vue'
import Colors from './Colors/index.vue'
import Text from './Text/index.vue'
import Modals from './Modals/index.vue'
import Inputs from './Inputs/index.vue'

export default defineComponent({
  components: {
    Text,
    Icons,
    Colors,
    Buttons,
    Settings,
    Modals,
    Inputs
  }
})
</script>

<style scoped>
.playground {
  padding: 2em;
  max-width: 1024px;
  margin: auto;
  padding: 10vh 2em;
}
.playground > section {
  margin-bottom: 20vh;
}
</style>
