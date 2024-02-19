<template>
    <div class="cards-container">
      <NoteCard v-for="note in notes" :key="note.id" :note="note" @deleteNote="$emit('deleteNote', note.id)" />
    </div>
  </template>
  
  <script setup props="['notes']">
  import NoteCard from "./NoteCard.vue";
  </script>
  
  <style scoped>

  </style>
  