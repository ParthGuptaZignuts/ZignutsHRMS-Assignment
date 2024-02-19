<script setup>
import {ref ,computed} from 'vue' ;
// this is the method example 
 const methodName = ref("name will be shown here") ;
 const newMethodName = ref() ;
 const methodFunction = () =>{
    methodName.value = newMethodName.value ;
    newMethodName.value = '' ;
        
}

// this is the computed example
const computedName = ref("name will be shown here") ;
const newComputedName = ref() ;

const computedFunction = computed(() =>{
    computedName.value = newComputedName.value;
    newComputedName.value = '' ;
})
</script>
   
<template>
    <p>computed property is same as the method but the only difference is that it is cached friendly when we want to use the heavy calculation or the ref value which is not changing everytime then we use computed property but when the values need to be changed and calculation are not long then we use methods 
    </p>
    <!-- this is the method example -->
    <p>{{ methodName }}</p>
    <input type="text" v-model="newMethodName">
    <button @click="methodFunction">ChangeName</button>

    <!-- this is the computed property example -->
    <p>{{ computedName }}</p>
    <input type="text" v-model="newComputedName">
    <button @click="computedFunction">added</button>

</template>

<style scoped>
</style>