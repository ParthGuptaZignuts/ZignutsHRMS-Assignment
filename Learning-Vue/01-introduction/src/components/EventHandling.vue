<script setup>
import { ref } from 'vue'
const name = ref('Vue.js') ;

function greet(event){
    alert(`hello ${name.value}`) ;
}
function say(message) {
  alert(message)
}
</script>

<template>
    <button @click="greet">Greet</button>
    <button @click="say('hello')">Say hello</button>
	<button @click="say('bye')">Say bye</button>
</template>

<style>

</style>