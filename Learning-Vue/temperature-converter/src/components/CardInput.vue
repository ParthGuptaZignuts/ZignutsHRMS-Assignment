<script setup>
defineProps({value:"value"})
</script>

<template>
    <input type="number" :value="c" @change="setC"> 
</template>

<style scoped>

</style>
