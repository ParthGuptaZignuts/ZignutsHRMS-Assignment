<script setup>
const name = "parth gupta" ;
</script>

<template>
 <p>the name is {{ name }}</p>
 <p>this is the text interpolation example</p>
<p>Using text interpolation: <span style="color: orange;">{{ name }}</span></p>
<p>Using v-html directive: <span v-html="name"></span></p>
</template>

<style scoped>
 span{
  color:red;
 }
</style>
