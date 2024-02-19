<script setup>
import {ref} from 'vue'
const awesome = ref(true) ;
</script>

<template>
<button @click="awesome =!awesome">toggle</button>
<h1 v-if="awesome">vue is awesome</h1>
<h1 v-else>oh no this is not awesome</h1>
</template>

<style>

</style>