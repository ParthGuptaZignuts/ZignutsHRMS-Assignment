<script setup>
const id = "parth" ;
const link = "https://chat.openai.com/" ;
const dynamicId = {
    backgroundColor: "red" ,
    height:"20vh",
    width:"20vw",
    margin:"auto"
}
const href = "check-this" ;
</script>

<template>
<h1>this is the example of the v-bind</h1>
<p>when we want to give the value from the js to the attribute we use vbind</p>
<div :id="id"></div>

<!-- this is the passing the value of the link -->
<a :href="link">chat gpt link</a> <br>

<a :[href]="link">link5</a>

</template>
<style scoped>
</style>