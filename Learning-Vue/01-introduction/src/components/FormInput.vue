<script setup>
import { ref } from 'vue'
const inputText = ref('') ;
const TextArea = ref('') ;
const checked = ref(true) ;
const checkNames = ref([]) ;
</script>

<template>
<p>InputText is : {{ inputText }}</p>
<input type="text" v-model="inputText" placeholder="edit me">
<p>TextArea is : {{ TextArea }}</p>
<textarea v-model="TextArea" placeholder="add more lines here"></textarea>
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
<div>
    checked Names : {{ checkNames }} ;

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
   
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
   
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
</div>
</template>

<style>

</style>