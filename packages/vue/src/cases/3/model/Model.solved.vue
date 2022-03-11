<script setup lang="ts">
import { ref } from 'vue';

const username = ref('')
</script>

<template>
    <label for="username">Username</label>
    <input id="input" type="text" name="username" placeholder="Enter username" v-model="username" />

    <p id="greeting">Greetings {{ username || 'Unknown' }}</p>
</template>