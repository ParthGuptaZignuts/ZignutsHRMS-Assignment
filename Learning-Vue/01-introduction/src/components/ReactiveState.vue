<script setup>
import { ref } from 'vue'

// this is the onclick
const hero = ref({ name: 'Batman' })
const onClick = () => hero.value.name = 'Joker';

// this is the name chainging
const name = ref("parth gupta") ;
const newName = ref() ;
const changeName = () => {
    name.value = newName.value;
    newName.value = "";
}

// this is working with objects
const obj2 ={
    count : ref(0)
};
const increase = () =>{
    obj2.count.value++;
}
const decrease = () =>{
    obj2.count.value--;
}

// this is for working with arrays
const items = ref([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ]);
const newItem = ref("");
const addItem = () =>{
        items.value.push({id:Date.now() , name: newItem.value});
        newItem.value = "" ;
}
</script>
<template>
  <h1>{{ hero.name }}</h1> 
  <button @click="onClick">Change</button>
  
  <div>
    <p>{{ name }}</p>
    <input type="text" v-model="newName" />
    <button @click="changeName">Change Name</button>
  </div>

  <!-- using ref with objects -->
  <h1>{{ obj2.count.value }}</h1>
  <button @click="increase">increase the value</button>
  <button @click="decrease">decrease the value</button>


  <!-- using ref with arrays  -->
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <input v-model="newItem" @keyup.enter="addItem" />
    <button @click="addItem">Add Item</button>
  </div>

</template>