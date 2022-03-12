<!-- 
    Write the script for a simple counter component.

    The component should have a button that increments the counter

    It should start at 0 and is allowed to be negative
-->
<script setup lang="ts">

</script>

<template>
    <p id="counter">Counter: {{ counter }}</p>
    <button id="increase" @click="increaseCounter">Increase Counter</button>
    <button id="decrease" @click="decreaseCounter">Decrease Counter</button>
</template>