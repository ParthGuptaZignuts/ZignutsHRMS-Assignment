<script setup>
import ReactiveState from './components/ReactiveState.vue';
import TextInterpolation from './components/TextInterpolation.vue'
import AttributBinding from './components/AttributeBinding.vue'
import ComputedProperty from './components/ComputedProperty.vue';
import StyleClass from './components/StyleClass.vue';
import ConditionalRendering from './components/ConditionalRendering.vue';
import ListRendering from './components/ListRendering.vue';
import EventHandling from './components/EventHandling.vue';
import FormInput from './components/FormInput.vue';
import {ref} from 'vue' ;

const count = ref(0) ;
const name = "parth gupta" ;
function increment(){
  count.value++ ; 
}

</script>

<template>
 <button @click="increment">count is : {{ count }}</button>
 <TextInterpolation/>
 <AttributBinding/>
 <ReactiveState/>
<ComputedProperty/>
<StyleClass/>
<ConditionalRendering/>
<ListRendering/>
<EventHandling/>
<FormInput/>
</template>

<style scoped>

</style>
