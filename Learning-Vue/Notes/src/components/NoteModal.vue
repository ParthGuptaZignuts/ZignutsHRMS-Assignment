<template>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <p @click="$emit('closeModal')">x</p>
        <textarea v-model="newNote" />
        <button @click="$emit('addNote')">Add Note</button>
      </div>
    </div>
  </template>
  
  <script setup props="['showModal', 'newNote']">

  </script>
  
  <style scoped>

  </style>
  