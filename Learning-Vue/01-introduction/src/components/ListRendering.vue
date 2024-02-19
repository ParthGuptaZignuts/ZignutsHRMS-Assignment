<script setup>
import { ref } from 'vue'

const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const obj = ref({
    title: "this is the title " ,
    author: "hello i am the author" ,
    publish : "i am the publisher"
})
</script>

<template>
	<li v-for="(item, index) in items">
  	{{ parentMessage }} - {{ index }} - {{ item.message }}
	</li>

    <ul>
        <li v-for="(value , key , index) in obj">
            {{ index }} . {{ key }} : {{ value }}
        </li>
    </ul>

    <span v-for="n in 10">{{ n }}</span>
</template>