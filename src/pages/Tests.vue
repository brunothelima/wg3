<template>
  <section class="tests">
    <h1>WG3 TESTS</h1>
    <div
      v-for="(test, aIndex) of tests.testResults"
      :key="`test_${aIndex}`"
      class="test"
    >
      <header>
        <p>
          <b>Test: {{ test.name.split("/").pop() }}</b>
        </p>
        <span :class="test.status">Status: {{ test.status }}</span>
      </header>
      <hr />

      <div class="assertions">
        <span><b>Assertions:</b></span>
        <div
          v-for="(assertion, bIndex) of test.assertionResults"
          :key="`asertion_${bIndex}`"
          class="assertion"
        >
          <span>
            <i class="icon-thick-2px" v-if="assertion.status === 'passed'"></i>
            <i class="icon-close" v-else></i>
            Test: {{ assertion.title }}
          </span>
          <div class="errors" v-if="assertion.failureMessages.length">
            <div
              v-for="(error, cIndex) of assertion.failureMessages"
              :key="`asertion_${cIndex}`"
            >
              <pre>{{ error }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import tests from "../../__tests__/results.json";

export default {
  setup() {
    return {
      tests,
    };
  },
};
</script>

<style scoped>
.tests {
  overflow: visible;
  max-width: 1024px;
  margin: auto;
  padding: 10vh 2em;
}
.test {
  margin-bottom: 5vh;
  padding: 2em;
  box-shadow: var(--box-shadow-light);
  border-radius: var(--input-border-radius);
  border: var(--input-border-width) var(--input-border-style) var(--color-a-1);
}
.assertion .icon-close,
.test header span.failed {
  color: var(--color-error);
}
.assertion .icon-thick-2px,
.test header span.passed {
  color: var(--color-success);
}
.test hr {
  margin: 1em 0 2em;
}
.test header p {
  margin: 0 0 0.5em;
}

.assertion {
  margin-top: 1em;
}
.assertion > span {
  display: flex;
  align-items: center;
}
.assertion i {
  margin-right: 0.5em;
}

.errors {
  margin-bottom: 2em;
}
.errors pre {
  overflow: auto;
  padding: 1em;
  margin: 1em 0;
  border: 1px solid red;
  line-height: 150%;
}
</style>
