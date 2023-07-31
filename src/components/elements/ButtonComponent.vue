<template>
    <button class="bg-red-500 text-white px-10 py-3 uppercase tracking-widest hover:bg-gray-900 transition-colors">{{ props.text }}</button>
</template>
<script setup>
import { defineProps } from "vue"

const props = defineProps([
    'text'
])
</script>