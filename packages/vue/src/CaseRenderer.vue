<script setup lang="ts">
import { DefineComponent, defineComponent, ShallowRef, shallowRef, watchEffect } from 'vue';


const props = defineProps<{
    casePath: string
}>()

let component: ShallowRef<DefineComponent | null> = shallowRef(null)

watchEffect(async () => {
    const casePath = props.casePath
    const testCases = (await import('./main')).testCaseComponents

    if (casePath in testCases) {
        const module = testCases[casePath]

        component.value = defineComponent(module.default)
        return;
    }

    component.value = null
})
</script>

<template>
    <p v-if="!component">Component not found: {{ casePath }}</p>
    <div v-else>
        <h1>Test case: {{ casePath.split('/').pop() }}</h1>
        <component :is="component"></component>
    </div>
</template>