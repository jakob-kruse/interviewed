<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import CaseRenderer from './CaseRenderer.vue'
import { testCaseComponents } from './main';

const casePath = ref(localStorage.getItem('casePath') || '')

// Persist casePath in localStorage
watchEffect(() => {
  if (casePath.value) {
    localStorage.setItem('casePath', casePath.value)
  }
})

</script>
<template>
  <input list="case" name="casePath" v-model="casePath" placeholder="Select a Test Case" />

  <datalist id="case">
    <option v-for="path in Object.keys(testCaseComponents)" :key="path" :value="path"></option>
  </datalist>

  <button @click="casePath = ''">x</button>

  <CaseRenderer v-if="casePath" :casePath="casePath"></CaseRenderer>
  <div v-else>Please select a test case</div>
</template>
